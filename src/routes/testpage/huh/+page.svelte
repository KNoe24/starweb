<script lang="ts">
  import Navbar from '$lib/components/mainnavbar.svelte';
  import { tick } from 'svelte';

  let showToast = false;

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText('play.starlightnetwork.net');
      showToast = true;

      await tick();

      setTimeout(() => {
        showToast = false;
      }, 2000);
    } catch (err) {
      console.error('Másolás sikertelen:', err);
    }
  }
</script>

<Navbar />

<header id="top">
  <div class="header-content">
    <div class="texts">
      <div class="l-text">
        <p>
          FEDEZD FEL A VARÁZSLATOS VILÁGÁT
        </p>
      </div>
      <div class="s-text">
        <p>
          …ahol a túlélés nem egy unalmas grindolás, a közösség pedig él, és minden esemény új meglepetést hoz magával a szerverre.
        </p>
      </div>
      <div class="buttonstext">
        <button class="mcbutton csatlakozas"  on:click={copyToClipboard}>
          CSATLAKOZZ
        </button>

        <button class="mcbutton discord" on:click={() => window.open('https://dc.starlightnetwork.net', '_blank')}>
          <img src="/img/discord.svg" height="25px" alt="Discord" /> DISCORD
        </button>

      </div>
    </div>
  </div>
</header>

<section class="server-ip mcsection mcstyle" id="info">
  <div class="ip-container">
    <p class="l-ip">A SZERVER IP CÍME:</p>

    <div class="ip-box">
      <span class="ipcim">play.starlightnetwork.net</span>
    </div>
    <button class="mcbutton copy-button" on:click={copyToClipboard}>
      <img src="/img/copy.svg" height="20px" alt="copy"> MÁSOLÁS
    </button>
  </div>
</section>
<section id="htc" class="htc-section mcsection">
  <section class="rowifier"> 
  <h4 class="title minecraftten howcsatl">HOGYAN CSATLAKOZHATSZ?</h4>
  <div class="info-box">
    <div class="info-icon minecraftten">
      <img src="/img/server.svg" height="20px" alt="server" />
      <p class="versio"> 
      VERZIÓ
      </p>
    </div>
    <div class="separator">|</div>
    <div class="info-version">1.8–1.21.4</div>
  </div>
  </section>
    <div class="download-container">
  <section id="javadownlload mcsection" class="mcsecetion mcstyle">

    <div class="rowifier">
    <span class="gradient bigtext"> Java</span>
      <span class=" bigtext "> Letöltés</span>
      <p class="text-left sxtext rowsep ">A Minecraft Java Edition azért van Java-ban, mert a játék Java-ban íródott. A Java a motor, ami a játékot futtatja. Ha nincs Java, a Minecraft nem indul el.</p>
      </div>
      <div class="atoleft">
          <button class="mcbutton java-button" on:click={() => window.open('https://www.java.com/en/download/', '_blank')}>
      <img src="/img/openpage.svg" height="20px" alt="letöltés"> letöltés
    </button>
</div>
</section>




  <section id="tlauncher mcsection"class="mcsecetion mcstyle">

    <div class="rowifier ">
    <span class="gradient bigtext "> tlauncher</span>
      <span class=" bigtext "> Letöltés</span>
      <p class="text-left sxtext rowsep">Ahhoz, hogy csatlakozz a Starlight Network Minecraft szerverhez, szükséged lesz egy launcherre. Ez a launcher segít elindítani a játékot, kiválasztani a megfelelő verziót, és csatlakozni a szerverhez. Ha már rendelkezel egy launcherrel, akkor ez a lépés kihagyható. </p>
      </div>
      <div class="atoleft">
                <button class="mcbutton tlauncher-button" on:click={() => window.open('https://tlauncher.org/en/', '_blank')}>
      <img src="/img/openpage.svg" height="20px" alt="letöltés"> letöltés
    </button>
                </div>


</section>
</div>
</section>

<section id='help' class="mcstyle mcsection"> 
  <span class="title minecraftten">SEGÍTSÉGRE VAN SZÜKSÉGED?</span>
  <span class="sxtext centertext rowsepmin">Ha bármikor elakadnál, kérdésed van, vagy technikai segítségre van szükséged, mi mindig itt vagyunk, hogy segítsünk! Kérlek, ne habozz kapcsolatba lépni velünk a megadott elérhetőségeken.</span>

  <div class="rowifier">

            <button class="mcbutton csatlakozas"  on:click={() => window.open('mailto:support@starlightnetwork.net', '_blank')}>
          <img src="/img/email.svg" height="25px" alt="Discord" /> E-mail küldése
        </button>

        <button class="mcbutton discord" on:click={() => window.open('https://dc.starlightnetwork.net', '_blank')}>
          <img src="/img/discord.svg" height="25px" alt="Discord" /> DISCORD
        </button>
  </div>


</section>

<div class="toast" class:show={showToast}>Copied to clipboard!</div>
