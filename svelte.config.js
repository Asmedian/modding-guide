import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      // GitHub Pages uses the original static files. Avoid opening two extra
      // compression streams per file for the complete reference on Windows.
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.BASE_PATH ?? '',
      relative: false
    }
  }
};

export default config;
