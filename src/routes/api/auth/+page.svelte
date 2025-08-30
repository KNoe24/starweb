<script lang="ts">
  let mode: 'login' | 'register' = 'register';
  let username = '';
  let email = '';
  let password = '';
  let confirm = '';
  
  let message: { type: 'success' | 'error'; text: string } | null = null;

  async function submitRegister() {
    message = null;
    const r = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email })
    });
    const data = await r.json();
    if (data.ok) {
      message = { type: 'success', text: 'Registered! You can now /login in Minecraft.' };
      mode = 'login';
      password = confirm = '';
    } else {
      message = { type: 'error', text: data.error || 'Registration failed.' };
    }
  }

  async function submitLogin() {
    message = null;
    const r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await r.json();
    if (data.ok) {
      message = { type: 'success', text: 'Logged in! Welcome to the panel.' };
      window.location.href = '../app'
    } else {
      message = { type: 'error', text: data.error || 'Login failed.' };
    }
  }
</script>
      <a href="../" class="mcbutton">Vissza</a>
<section class="mcsection">

  <header class="brand">
    <h1 class="title gradient">Starlight Network</h1>
    
    <p class="domain">A weboldal használatával elfogadod a <a href="../legal/terms" class="domain gradient">TOS</a> szabályzatunkat</p>
    <p class="domain">Megtekinthető  <a href="../legal/terms" class="domain gradient">ITT!           </a> </p>
  </header>

  <div class="card ">
    <div class="tabs">
      <button class="mcbutton" class:active={mode === 'register'} on:click={() => (mode = 'register')}>Register</button>
      <button class="mcbutton" class:active={mode === 'login'} on:click={() => (mode = 'login')}>Login</button>
    </div>

    {#if message}
      <div class="msg {message.type}">{message.text}</div>
    {/if}

    <form on:submit|preventDefault={mode === 'register' ? submitRegister : submitLogin} class="form">
      <label>
        <span>Játékos név</span>
            <input
            name="username"
            bind:value={username}
            placeholder="Minecraft name"
            minlength="3"
            maxlength="16"
            required
            />

      </label>
      <label>
        <span>Jelszó</span>
        <input name="password" type="password" bind:value={password} minlength="6" required />
      </label>
      
      {#if mode === 'register'}
      <label>
        <span>Jelszó mégegyszer</span>
        <input name="confirm" type="password" bind:value={confirm} minlength="6" required />
      </label>
      <label>
        <span>Email</span>
        <input name="password" type="password" bind:value={password} minlength="6" required />
      </label>
        {#if confirm && password !== confirm}
          <div class="hint">Passwords do not match.</div>
        {/if}
      {/if}

      <button class="primary mcbutton" type="submit" disabled={mode === 'register' && password !== confirm}>
        {mode === 'register' ? 'Fiók készítése' : 'Bejelentkezés'}
      </button>
    </form>
  </div>
</section>

<style>
  /* Optional Tailwind import per your note (won't break if Tailwind isn't set up) */
  @import 'tailwindcss';

  @font-face {
    font-family: Minecraft-ten;
    src: url('/fonts/Minecraft-ten.ttf');
  }
  @font-face {
    font-family: Minecraft-regular;
    src: url('/fonts/MinecraftRegular-Bmg3.otf');
  }

  :root {
    --bg: #1e1e1e;
    --panel: #282828;
    --text: #fff;
    --muted: #c8c8c8;
    --accent: #7dd3fc; /* subtle cyan */
    --danger: #ef4444;
    --success: #22c55e;
  }

  html, body {
    height: 100%;
    background: var(--bg);
    margin: 0;
    font-family: Minecraft-regular, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: var(--text);
  }

  /* Your requested section style, centered & responsive */
  section {
    margin-bottom: 20px;
    margin-top: 20px;
    background: #282828;
    font-size: 1.7rem;
    color: white !important;
    padding-right: 70px !important;
    padding-bottom: 50px !important;
    transition: all 0.3s;
    max-width: 1400px;
    margin: 20px auto; /* centers horizontally */
    display: flex; /* enables flex centering */
    flex-direction: column; /* stack children vertically */
    justify-content: center; /* vertical alignment of content */
    align-items: center; /* horizontal alignment of children */
    width: 100%;
  }

  .brand {
    text-align: center;
    padding: 2rem 1rem 1rem;
  }
  .title {
    margin: 0;
    font-family: Minecraft-ten, Minecraft-regular, inherit;
    letter-spacing: 1px;
  }
  .domain {
    margin: .25rem 0 0;
    color: var(--muted);
    font-size: 1rem;
  }

  .card {
    width: 100%;
    max-width: 520px;
    background: var(--panel);
    padding: 1rem;
    box-shadow: 0 10px 30px rgba(0,0,0,.35);
  }

  .tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
    margin-bottom: 1rem;
  }
  .tabs button {
    background: #1f1f1f;
    color: var(--text);
    border: 0;
    padding: .75rem;
    cursor: pointer;
    font-size: 1rem;
  }
  .tabs button.active {
    outline: 2px solid var(--accent);
    background: #232323;
  }

  .msg {
    padding: .75rem;
    margin-bottom: 1rem;
    font-size: .95rem;
  }
  .msg.error { background: rgba(239, 68, 68, .15); outline: 1px solid rgba(239,68,68,.35); }
  .msg.success { background: rgba(34, 197, 94, .15); outline: 1px solid rgba(34,197,94,.35); }

  .form { display: grid; gap: .85rem; }
  label { display: grid; gap: .35rem; font-size: 1rem; }
  input {
    width: 100%;
    background: #1f1f1f;
    color: var(--text);
    border: 1px solid #3a3a3a;
    padding: .85rem 1rem;
    font-size: 1rem;
    outline: none;
  }
  input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(125,211,252,.15); }

  .hint { color: var(--danger); font-size: .9rem; margin-top: -.4rem; }

  .primary {
    margin-top: .25rem;
    background: linear-gradient(180deg, #2a2a2a, #1f1f1f);
    border: 1px solid #3a3a3a;
    color: var(--text);
    padding: .9rem 1.1rem;
    font-weight: 600;
    cursor: pointer;
  }
  .primary:hover { border-color: var(--accent); }
  @media (max-width: 560px) {
    section { padding-right: 16px !important; padding-left: 16px !important; }
    .card { padding: .75rem; }
  }
</style>
