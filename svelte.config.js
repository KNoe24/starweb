import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
    // If you need to disable prerendering for DB-backed pages, you can also set:
    // prerender: { entries: [] }
  }
};

export default config;
