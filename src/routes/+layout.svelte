<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';

  // Map pathnames (or prefixes) to titles
  function getPageTitle(pathname: string): string {
    if (pathname === '/') return 'Starlight Network';
    if (pathname.startsWith('/app')) return 'StarCenter | Starlight Network';
    if (pathname.startsWith('/legal/privacy')) return 'Privacy Policy | Starlight Network';
    if (pathname.startsWith('/legal/terms')) return 'Terms of Service | Starlight Network';
    if (pathname.startsWith('/api/auth')) return 'Authentication | StarCenter';
    return 'Starlight Network';
  }

  // reactive title from the *value* of the store
  $: title = getPageTitle($page.url.pathname);
</script>

<svelte:head>
  <title>{title}</title>
  <!-- optional: set a favicon -->
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<!-- Standard SvelteKit layout slot -->
<div class="main-content-area">
  <div class="@container/main flex flex-col gap-2">
    <div class="flex flex-col gap-4 md:gap-6">
      <div class="px-4 md:py-4 lg:px-6">
        <slot />
      </div>
    </div>
  </div>
</div>
