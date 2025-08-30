<script>
import Navbar from '$lib/components/mainnavbar.svelte';







  let items = Array(50).fill("lorem impus");
</script>




<Navbar />





<div class = color1>
  {#each items as item}
  <p>{item}</p>
  {/each}
</div>

<section id="info">
  <h2 class="color1">Info Section</h2>
  <p class="color1">This is the section you scroll to smoothly.</p>
</section>

<style>


  .mcsection {
    padding: 100px;
    margin: 20px 0;
    padding-right: 25px !important;
    padding-left: 25px !important;
    background: #282828 ;
    padding-bottom: 15px !important;
    padding-top: 10px !important;
    box-shadow: 0px 4px 0px 0px rgba(255, 255, 255, 0.137) inset, 0px -4px 0px 0px rgba(0, 0, 0, 0.241) inset, 5px 5px 36px #0000001a;
  }



  
  .color1 {
  width: 100%;
  border: none !important;
  color: aliceblue;
  margin-top: 100px; /* or exact navbar height */
  }


</style>

