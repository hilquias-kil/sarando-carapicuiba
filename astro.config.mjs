// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://sarandocarapicuiba.org',
  output: 'static',

  // Both are Astro defaults and both match what Gatsby served.
  // Changing either rewrites every indexed URL.
  trailingSlash: 'ignore',
  build: { format: 'directory' },

  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },

  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],

  vite: { plugins: [tailwindcss()] },

  // No `redirects` block on purpose: without an adapter it emits meta-refresh
  // pages, which are not 301s. Redirects live in public/_redirects.
})
