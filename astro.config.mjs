// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://lejonmcgowan.github.io/PortfolioWebsiteV2/',
  base: '/PortfolioWebsiteV2',
});