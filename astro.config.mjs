// @ts-check
import { defineConfig } from 'astro/config';

/** Variables de entorno sin depender de @types/node. */
const env = /** @type {Record<string, string | undefined>} */ (/** @type {any} */ (globalThis).process.env);

export default defineConfig({
  // En GitHub Pages la web vive en /portfolio-ruben/: el workflow pasa ambos valores.
  site: env.SITE_URL ?? 'https://rubensanchez.dev',
  base: env.BASE_PATH ?? '/',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
