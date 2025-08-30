<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { PageData } from './$types';
  export let data: PageData;

  let canvasEl: HTMLCanvasElement;
  let ctx!: CanvasRenderingContext2D;

  function drawChart(labels: string[], values: number[]) {
    const dpi = window.devicePixelRatio || 1;
    const padding = 30 * dpi;
    const w = canvasEl.clientWidth * dpi;
    const h = 220 * dpi;

    canvasEl.width = w;
    canvasEl.height = h;

    ctx.clearRect(0, 0, w, h);
    ctx.font = `${12 * dpi}px system-ui, -apple-system, Segoe UI, Roboto, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const left = padding;
    const right = w - padding;
    const top = padding;
    const bottom = h - padding;

    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1 * dpi;

    const maxVal = Math.max(10, Math.max(...values));
    const step = Math.ceil(maxVal / 4);

    for (let i = 0; i <= 4; i++) {
      const yVal = i * step;
      const y = bottom - (yVal / (4 * step)) * (bottom - top);
      ctx.beginPath();
      ctx.moveTo(left, y);
      ctx.lineTo(right, y);
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.textAlign = 'right';
      ctx.fillText(`${yVal}`, left - 8 * dpi, y);
    }

    const xStep = (right - left) / (labels.length - 1);
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.textAlign = 'center';
    labels.forEach((lab, i) => {
      const x = left + i * xStep;
      ctx.fillText(lab.slice(5), x, bottom + 12 * dpi);
    });

    ctx.lineWidth = 2 * dpi;
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    values.forEach((v, i) => {
      const x = left + i * xStep;
      const y = bottom - (v / (4 * step)) * (bottom - top);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    values.forEach((v, i) => {
      const x = left + i * xStep;
      const y = bottom - (v / (4 * step)) * (bottom - top);
      ctx.beginPath();
      ctx.arc(x, y, 3 * dpi, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
    });
  }

  function resize() {
    if (!ctx) return;
    drawChart(data.onlineTime.labels, data.onlineTime.minutes);
  }

  function formatBanEnds(ends?: number) {
    if (!ends) return '—';
    const ms = ends < 2_000_000_000 ? ends * 1000 : ends;
    const d = new Date(ms);
    return d.toLocaleString();
  }

  async function logout() {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
    if (response.ok) window.location.href = '/';
    else console.error('Logout failed');
  }

  onMount(() => {
    const c = canvasEl.getContext('2d');
    if (!c) throw new Error('Canvas 2D context not available');
    ctx = c;
    drawChart(data.onlineTime.labels, data.onlineTime.minutes);
    window.addEventListener('resize', resize);
  });

  onDestroy(() => {
    window.removeEventListener('resize', resize);
  });
</script>

<div class="wrap mcstyle">
  <header class="site-header">
    <h1 class="mct gradient">StarCenter</h1>
    <button class="mcbutton logout" on:click={logout}>Logout</button>
  </header>

  <!-- Info Section -->
  <section class="panel-section mcsection">
    <h2 class="mct">Info</h2>
    <div class="info-grid">
      <div class="info-card mcbutton">
        <span class="label">Player</span>
        <span class="value">{data.username}</span>
      </div>
      <div class="info-card mcbutton">
        <span class="label">Starcoin</span>
        <span class="value">{data.points}</span>
      </div>
      <div class="info-card mcbutton">
        <span class="label">Rank</span>
        <span class="value">{data.rank}</span>
      </div>
      <div class="info-card mcbutton">
        <span class="label">Punishment</span>
        {#if data.punishment?.banned}
          <span class="value bad">BANNED</span>
          <div class="sub">Reason: {data.punishment?.reason ?? '—'}</div>
          <div class="sub">Ends: {formatBanEnds(data.punishment?.ends)}</div>
        {:else}
          <span class="value good">None</span>
        {/if}
      </div>
    </div>
  </section>

  <!-- Online Time Section -->
  <section class="panel-section mcsection">
    <h2 class="mct">Online Time (last 7 days)</h2>
    <div class="chart-wrap">
      <canvas bind:this={canvasEl}></canvas>
    </div>
  </section>

  <!-- Shop Section -->
  <section class="panel-section mcsection">
    <h2 class="mct">Bolt</h2>
    <div class="shop-wrap">
      <a class="shop-btn mcbutton" href="/shop" rel="noopener">Open Shop</a>
      <p class="about mct">
        Vásárolj rangokat, coinokat és egyébeket. A vásárlásaid támogatják a szerverünket.
      </p>
    </div>
  </section>

  <footer class="site-footer">
    © {new Date().getFullYear()} Starlight Network
  </footer>
</div>

<style>
  :root {
    --bg: #1e1e1e;
    --panel: #282828;
    --text: #ffffff;
    --muted: #bdbdbd;
    --good: #8bd17c;
    --bad: #ff6b6b;
    --accent: #ffffff;
  }
  * { box-sizing: border-box; }

  .wrap {
    min-height: 100dvh;
    padding: 12px;
    background: var(--bg);
    color: var(--text);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif;
  }

  .site-header, .site-footer {
    max-width: 1400px;
    margin: 0 auto;
    padding: 10px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .site-header h1 { font-size: 1.4rem; margin: 0; }

  .logout {
    background: transparent;
    border: 1px solid rgba(255,255,255,.3);
    color: var(--text);
    padding: 8px 12px;
    cursor: pointer;
  }
  .logout:hover { border-color: rgba(255,255,255,.6); }

  .panel-section {
    margin: 20px auto;
    background: #282828;
    font-size: 1rem;
    color: white;
    padding: 16px 70px 50px 16px;
    transition: all 0.3s;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .panel-section h2 {
    width: 100%;
    max-width: 1200px;
    margin: 8px 0 16px 0;
    font-size: 1.4rem;
    padding-left: 4px;
  }

  .info-grid {
    width: 100%;
    max-width: 1200px;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0 4px;
  }
  @media (min-width: 640px) {
    .info-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (min-width: 1024px) {
    .info-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }

  .info-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .info-card .label { font-size: 0.9rem; color: var(--muted); }
  .info-card .value { font-size: 1.4rem; line-height: 1.1; }
  .info-card .value.good { color: var(--good); }
  .info-card .value.bad { color: var(--bad); }
  .info-card .sub { font-size: 0.85rem; color: var(--muted); }

  .chart-wrap { width: 100%; max-width: 1200px; padding: 8px 4px 0 4px; }
  canvas { width: 100%; height: 220px; display: block; }

  .shop-wrap {
    width: 100%;
    max-width: 1200px;
    padding: 4px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
  @media (min-width: 640px) {
    .shop-wrap { grid-template-columns: auto 1fr; align-items: center; }
  }

  .shop-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 12px 18px;
    border: 1px solid rgba(255,255,255,.3);
    color: var(--text);
  }
  .shop-btn:hover { border-color: rgba(255,255,255,.6); }

  .about { margin: 0; color: var(--muted); font-size: 0.95rem; }

  .site-footer { margin-top: 24px; font-size: 0.9rem; color: var(--muted); }
</style>
