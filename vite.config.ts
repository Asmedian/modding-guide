import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    warmup: {
      clientFiles: ['./src/lib/components/ArticlePage.svelte'],
      ssrFiles: ['./src/routes/**/erm/+page.server.ts']
    }
  },
  build: {
    target: ['chrome109', 'edge109', 'firefox115']
  }
});
