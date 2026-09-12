// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rubensanchez.dev',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
