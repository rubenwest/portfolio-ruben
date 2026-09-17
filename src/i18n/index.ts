export const languages = { es: 'Español', en: 'English' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Ruta absoluta dentro del sitio, con el `base` de Astro delante (GitHub Pages). */
export const withBase = (path: string) => `${BASE}${path}`;

/** Rutas equivalentes en cada idioma. El selector de idioma salta entre ellas. */
export const routes = {
  home: { es: withBase('/'), en: withBase('/en/') },
  work: { es: withBase('/como-trabajo/'), en: withBase('/en/how-i-work/') },
  stack: { es: withBase('/stack/'), en: withBase('/en/stack/') },
  projects: { es: withBase('/proyectos/'), en: withBase('/en/projects/') },
  experience: { es: withBase('/experiencia/'), en: withBase('/en/experience/') },
  community: { es: withBase('/comunidad/'), en: withBase('/en/community/') },
};

export type RouteKey = keyof typeof routes;

/** Orden de las secciones en la navegación. Lo comparte PortalCard: si cambia el orden, cambia su arte. */
export const sectionKeys = ['work', 'stack', 'projects', 'experience', 'community'] as const;

export function getLang(locale: string | undefined): Lang {
  return locale === 'en' ? 'en' : 'es';
}

const withSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`);

export function routeKeyFor(pathname: string): RouteKey | undefined {
  const path = withSlash(pathname);
  return (Object.keys(routes) as RouteKey[]).find((key) =>
    Object.values(routes[key]).includes(path as never),
  );
}

/** La misma página en otro idioma; si no tiene equivalente, su portada. */
export function localizedPath(pathname: string, lang: Lang): string {
  const key = routeKeyFor(pathname);
  return key ? routes[key][lang] : routes.home[lang];
}

export const ui = {
  es: {
    skipLink: 'Saltar al contenido',
    mainNav: 'Navegación principal',
    langNav: 'Idioma',
    cta: 'Hablemos',
    home: 'Inicio',
    keepExploring: 'Sigue explorando',
    footerLinks: 'Enlaces',
    footerLegal: 'Diseñado con intención. Construido en Almería.',
    explore: 'Explorar',
    viewTools: 'Ver herramientas de',
    current: 'Actual',
    showMore: 'Ver más',
    showLess: 'Ocultar detalle',
    nav: { work: 'Cómo trabajo', stack: 'Stack', projects: 'Proyectos', experience: 'Experiencia', community: 'Comunidad' },
    project: { code: 'Ver código', demo: 'Ver en vivo', private: 'Código privado', featured: 'Destacado' },
  },
  en: {
    skipLink: 'Skip to content',
    mainNav: 'Main navigation',
    langNav: 'Language',
    cta: "Let's talk",
    home: 'Home',
    keepExploring: 'Keep exploring',
    footerLinks: 'Links',
    footerLegal: 'Designed with intent. Built in Almería.',
    explore: 'Explore',
    viewTools: 'See tools for',
    current: 'Current',
    showMore: 'Show more',
    showLess: 'Hide details',
    nav: { work: 'How I work', stack: 'Stack', projects: 'Projects', experience: 'Experience', community: 'Community' },
    project: { code: 'View code', demo: 'See it live', private: 'Private repo', featured: 'Featured' },
  },
} as const;

export function navigation(lang: Lang) {
  return sectionKeys.map((key) => ({ key, label: ui[lang].nav[key], href: routes[key][lang] }));
}
