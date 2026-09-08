# Portfolio — Rubén Sánchez

Portfolio personal construido con **Astro** (SSG estático), TypeScript strict y
CSS puro con design tokens. Animaciones en Vanilla JS / Web APIs (Canvas 2D,
IntersectionObserver, scroll) — sin librerías de animación.

## Requisitos

- **Node ≥ 22.12** (fijado con Volta en `package.json` → `volta.node`, y en `.nvmrc`).

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:4321
npm run build    # astro check (tipos) + build estático en dist/
npm run preview  # servir el build de dist/
```

## Estructura

```
src/
  components/
    hero/          MosaicCanvas · ScrollTypewriter · Hero
    pixel-icons/   PixelIcon + icon-data.ts (bitmaps 8×8 propios)
    diagrams/      NodeDiagram · ConnectorPath · mocks/ (terminal, árbol, tests)
    marquee/       TechMarquee (100% CSS)
    cards/         ExperienceCard (details/summary, colapsable)
    layout/        Header · Footer
  content/         site.ts · experience.ts · stack.ts (datos tipados)
  layouts/         Base.astro (ClientRouter + reveal/secuencias globales)
  pages/           index.astro · dev-preview.astro
  styles/          tokens.css · global.css
public/            favicon.svg
```

### `/dev-preview`

Página aislada para ajustar las dos piezas más costosas (`MosaicCanvas` y
`ScrollTypewriter`) y ver todos los `PixelIcon` juntos.

## Animaciones

- **MosaicCanvas**: rejilla fusionada en rectángulos irregulares; cada 2-4 s una o
  dos celdas hacen morph cuadrado → rombo redondeado con ease-in-out-cubic
  (`performance.now()` para interpolar). Limpieza en `astro:before-swap`.
- **ScrollTypewriter**: `position: sticky` sobre contenedor de 220vh; el progreso
  de scroll revela el titular letra a letra. Cae a estático con `prefers-reduced-motion`.
- **NodeDiagram**: conectores SVG ortogonales dibujados con `stroke-dasharray` /
  `stroke-dashoffset` (longitud vía `getTotalLength()`) al entrar en viewport.
- **Reveal on scroll** y **secuencias** (terminal, tests, árbol): IntersectionObserver
  desde `Base.astro`, reenganchado en cada View Transition.

Todo respeta `prefers-reduced-motion: reduce`.

## Pendiente de Rubén

- `src/content/site.ts`: email/dominio reales y URLs de GitHub / LinkedIn / Almería Tech.
- Copy final del hero/about si se quiere pulir el tono de marketing.

## Despliegue

Sitio estático (`dist/`). Listo para Vercel (`vercel.json` incluido), Netlify o
GitHub Pages. Para GitHub Pages, ajustar `site` y `base` en `astro.config.mjs`.

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
