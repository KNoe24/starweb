<script lang="ts">
import { page } from '$app/stores';
import Navbar from '$lib/components/mainnavbar.svelte'
const status = $page.status;

    const message = getErrorMessage(status);


    function getErrorMessage(status: number) {
        switch (status) {
            case 404:
                return "This page doesn't exist. It's soo original, we didn't found it yet!"
            case 403:
                return "It seems like you don't have permission to access this page."
            case 429:
                return "You're sending too many requests!"
            case 500:
                return "We're down."
            default:    
                return "Something went wrong. If you know the problem you may open a ticket."
            
        }
    }

</script>

<svelte:head>
    <title>{status} | Starlight Network</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<Navbar />
 
<section class="flex min-h-[70vh] items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#282828]">
	<div class="flex flex-col items-center justify-center text-center max-w-xl w-full">
		<h1 class="text-primary mb-4 font-bold whitetext text-4xl sm:text-5xl leading-tight">
			{status} WRONG TURN?
		</h1>
		<p class="text-muted-foreground mb-8 text-lg whitetext">
			{message}
		</p>
	</div>
</section>



<style>

section {
  display: flex;
  justify-content: center;
  
  max-width: 70%;  /* or width: 80%; */
  max-height: 10%;
  margin: 0 auto;     /* centers the section horizontally */
  align-items: center;
  background: #282828;
  padding: 20px 40px;
  box-shadow: 0 4px 0 rgba(255, 255, 255, 0.1) inset,
              0 -4px 0 rgba(0, 0, 0, 0.2) inset;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>