<script>
  import { onMount, onDestroy } from 'svelte';

  let isOpen = false;
  let scrolled = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  // Ez a függvény nem fut automatikusan, csak eseményként.
  function handleScroll() {
    // Biztos, hogy itt már van window
    scrolled = window.scrollY > 10;
  }

  onMount(() => {
    // Csak itt lehet használni window-t
    window.addEventListener('scroll', handleScroll);
    // Azonnal lekérjük, hogy ha már lent vagyunk, az is érzékeljen
    handleScroll();
  });
</script>








<nav class="navbar {scrolled ? 'scrolled' : ''}">
  <button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
    ☰
  </button>

  <ul class="nav-links {isOpen ? 'open' : ''}">

      <li><a href="../#top" class="mcbutton colorlink">Főoldal</a></li>
      <li><a href="../#info" class="mcbutton colorlink">Információk</a></li>
      <li><a href="../#help" class="mcbutton colorlink">Segítség</a></li>
      <li><a href="../legal/terms" class="mcbutton colorlink">Terms</a></li>
      <li><a href="../api/auth" class="mcbutton colorlink gradientapp">Starcenter</a></li>
    
  </ul>
</nav>


<style>
@font-face {
  font-family: 'Minecraft-Ten';
  src: url('/fonts/Minecraft-ten.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Minecraft-regular';
  src: url('/fonts/MinecraftRegular-Bmg3.otf') format('opentype');
  font-display: swap;
}


  :global(html) {
    scroll-behavior: smooth;
  }







  .navbar {
    padding: 20px;
    display: flex;
    align-items: center;
    height: 100px; /* Example height */
    justify-content: center;
    font-family: 'Minecraft-ten', monospace;
    width: 100%;
    padding-left: 8%;
    padding-right: 8%;
    position: fixed; /* Fixáljuk a tetejére */
    top: 0;
    left: 0;
    right: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    z-index: 1000; /* Felül legyen minden fölött */
  }


  /* Amikor görgetünk, jön a háttér és árnyék */
  .navbar.scrolled {
        background: #282828 !important;
        box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.241) inset, 5px 5px 36px #0000001a;
  }

  .hamburger {
    font-size: 1.5rem;
    background: none;
    border: none;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: none;
    margin-right: 1rem;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 0;
    padding: 0;
    margin: 0;
  }
  .nav-links li a {
    text-decoration: none;
  }
  .colorlink {
    width: 100%;
    border: none !important;
    background: #2f2f2f;
  }




  .gradientapp{
    
    font-family: Minecraft-ten;
    background: linear-gradient(90deg, rgb(243, 240, 52), rgb(219, 161, 2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    src: url(/fonts/Minecraft-ten.ttf)
  }
  @media (max-width: 700px) {
    .hamburger {
      display: block;
      align-items: left;
      justify-content: left;
      background: #2f2f2f;
      
    }
    
    .nav-links.open {
      display: flex;
      background: #2f2f2f;
    }
    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: transparent;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 0;
      display: none;
    }
  }

</style>