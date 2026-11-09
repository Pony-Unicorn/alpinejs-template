// @ts-check

import alpine from '@astrojs/alpinejs'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://swift.testbug.cc',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap(), alpine({ entrypoint: '/src/alpine' })]
})
