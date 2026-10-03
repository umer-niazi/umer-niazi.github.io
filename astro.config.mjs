import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://umer-niazi.github.io',
  base: '/',
  output: 'static',
  redirects: {
    '/projects': '/#projects',
    '/about': '/#about',
  },
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});