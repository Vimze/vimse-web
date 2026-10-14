// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: "https://vimse.app",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({ filter: (page) => !page.includes("/reset-password") })],
  adapter: vercel(),
});