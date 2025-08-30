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
          Fedezd fel a
        </p>
        <span class="gradient">Starlight Network</span>
        <p>
          végtelen világát

        </p>
      </div>
      <div class="s-text">
        <p>
         ... ahol Kalandok, barátságok, meglepetések várnak, és van egy Kingdoms szerverünk is! Írd meg a saját történetedet!
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
    <div class="info-version">1.18.2–1.21.4</div>
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

<div class="help-buttons">
  <button class="mcbutton email" on:click={() => window.open('mailto:support@starlightnetwork.net', '_blank')}>
    <img src="/img/email.svg" alt="Email" /> E-mail küldése
  </button>

  <button class="mcbutton discord" on:click={() => window.open('https://dc.starlightnetwork.net', '_blank')}>
    <img src="/img/discord.svg" alt="Discord" /> DISCORD
  </button>
</div>



</section>

<div class="toast" class:show={showToast}>Sikeresen kimásolva!</div>

<style>
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
.atoleft {
  align-self: flex-end;

}
.java-button {
  border: none;
  font-size: 1rem;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  cursor: pointer;
  background-color: rgb(50, 100, 0);
  font-family: 'Minecraft-ten';
  font-size: 100%;
}

.tlauncher-button {
  border: none;
  font-size: 1rem;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  cursor: pointer;
  background-color: rgb(50, 100, 0);
  font-family: 'Minecraft-ten';
  font-size: 100%;
}




.sxtext {
font-size: 80%;

}
.mcstyle {

    padding-left: 70px !important;
    
    padding-top: 50px !important;

    box-shadow: 0px 4px 0px 0px rgba(255, 255, 255, 0.137) inset, 0px -4px 0px 0px rgba(0, 0, 0, 0.241) inset, 5px 5px 36px #0000001a;

}
.bigtext {
font-size: larger;
font-family: 'Minecraft-ten';
}
.centertext {
  text-align: center;
}
.text-left {
  text-align: left !important;
}

.mcsection {
  
  background: #282828;
    margin: 20px auto; /* centers horizontally */
    box-shadow: 0px 4px 0px 0px rgba(255, 255, 255, 0.137) inset, 0px -4px 0px 0px rgba(0, 0, 0, 0.241) inset, 5px 5px 36px #0000001a;

}
header {
  padding-left: 8%;
  padding-right: 8%;
  height: 100vh;
  background: url('/img/bg.png');
  display: flex;
  background-size: cover;
  flex-direction: column;
  background-position: center;
  margin-bottom: 20rem; /* adjust as needed */
  
}
@keyframes beuszas {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
.htc-section {
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 20px 40px;
  margin: 20px auto;
  width: 100%;
  flex-wrap: nowrap;
}

.rowifier {
  
  flex-direction: row;
}

.download-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
}
.info-box {
  display: flex;
  align-items: center;
  background-color: #3a3939;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  font-family: 'Minecraft-Ten';
  gap: 0.8rem;
  box-shadow: 0px 4px 0px 0px rgba(255, 255, 255, 0.137) inset,
              0px -4px 0px 0px rgba(0, 0, 0, 0.241) inset,
              5px 5px 36px #0000001a;
  flex-shrink: 0;
}

.title {
  color: white;
  font-size: 175%;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-family: 'Minecraft-regular';
  flex: 1;
}
/* Inner parts of info-box */
.info-icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rowsep {
  
  padding-top: 5%;
  padding-bottom: 10%;
}
.rowsepmin {
  
  padding-top: 2%;
}
.separator {
  opacity: 0.6;
}

.info-version {
  opacity: 0.85;
  font-family: monospace;
}




.header-content {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
  color: white;
  text-align: right;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.minecraftten {
  font-family: 'Minecraft-Ten';

}
.help-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  width: 100%;
}

.help-buttons .mcbutton {
  flex: 1;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.texts {
  max-width:600px !important;
  margin-left: auto;   
  text-align: right;   

}
.ip-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.l-ip {
  font-size: 150%;
  font-family: Minecraft-ten;
  color: white;
  margin: 0;
}

.ip-box {
  display: flex;
  align-items: center;
  background-color: #1e1e1e;
  padding: 12px 20px;
  box-shadow: inset 0 0 5px #00000088;
}

.ipcim {
  font-size: 1.5rem;
  color: white;
  font-family: monospace;
  white-space: nowrap;
}

.copy-button {
  border: none;
  font-size: 1rem;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  cursor: pointer;
  background-color: rgb(50, 100, 0);
  font-family: 'Minecraft-ten';
  font-size: 100%;
}
.texts .l-text {
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 1.080;
  margin-bottom: 1.8rem;
    color: white;
    font-family: Minecraft-ten;
}

.texts .s-text {
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0.85;
  max-width:550px !important;
  margin-left: auto;       /* ezzel kitolod teljesen jobbra a szÃ¶vegblokkot */
  text-align: right;       /* ezzel a benne lÃ©vÅ‘ szÃ¶veg jobbra igazodik */
  display: flex;           /* flexre rakjuk */
  flex-direction: column;  /* oszlop elrendezÃ©s */
  align-items: flex-end; 
    color: white;
}
.buttonstext {
  display: flex;
  gap: clamp(1rem, 2rem, 3rem);
}
.csatlakozas{
    color: #161616 !important ;
    width: 100%;
    background: white;
    border: none !important;
  font-family: 'Minecraft-ten';
  font-size: 100%;
}
.discord {

  gap: 10px; /* fáradt vagyokkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */
  background: #5865F2;
  width: 100%;
  border: none !important;
  color: white;
  font-family: 'Minecraft-ten';
  font-size: 100%;
}
.email {

  gap: 10px; 
  background: #6C757D;
  width: 100%;
  border: none !important;
  color: white;
  font-family: 'Minecraft-ten';
  font-size: 100%;
}
.csatlakozas, .discord {
    font-size: 1.9rem !important;
    max-height: 60px;
      display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .header-content {
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
  }
  .texts {
    max-width: 100%;

  }
  .help-buttons {
    flex-direction: column;
    align-items: center;
  }

  .help-buttons .mcbutton {
    width: 100%;
    max-width: none;
  }
    .htc-section {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    padding: 20px;
    gap: 1rem;
  }

  .info-box {
    justify-content: center;
    width: 100%;
  }

  .title {
    white-space: normal;
    text-align: center;
  }
  
  .texts .l-text {
    font-size: 2.5rem;
    
  }
  .texts .s-text {
    font-size: 1.2rem;
  }
  .buttonstext {
    justify-content: center;
    width: 100%;
  }
    .texts .s-text, .texts .l-text{
        text-align:  right !important;
        
    }
    .texts .l-text{
        margin-bottom: 15px !important;
    }
    .texts .s-text{
        margin-bottom: 25px !important;
    }
    .discord{
        
       
        align-items: center;  
               
        white-space: nowrap; 
    }
        .email{
        
       
        align-items: center;  
               
        white-space: nowrap; 
    }

}
.mcbutton img {
  height: 25px;
  width: 25px;
  margin-right: 12px;
  display: inline-block;
  vertical-align: middle;
}


  .toast {
    opacity: 0;
    transition: opacity 0.3s ease;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #333;
    color: white;
    padding: 12px 20px;
    border-radius: 4px;
    pointer-events: none;
  }

  .toast.show {
    opacity: 1;
    pointer-events: auto;
  }

</style>
