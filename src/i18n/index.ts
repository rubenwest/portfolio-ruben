export const languages = { es: 'Español', en: 'English' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

/** Rutas equivalentes en cada idioma. El selector de idioma salta entre ellas. */
export const routes = {
  home: { es: '/', en: '/en/' },
  work: { es: '/como-trabajo/', en: '/en/how-i-work/' },
  stack: { es: '/stack/', en: '/en/stack/' },
  experience: { es: '/experiencia/', en: '/en/experience/' },
  community: { es: '/comunidad/', en: '/en/community/' },
} as const;

export type RouteKey = keyof typeof routes;

/** Orden de las secciones en la navegación. */
export const sectionKeys = ['work', 'stack', 'experience', 'community'] as const;

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
    nav: { work: 'Cómo trabajo', stack: 'Stack', experience: 'Experiencia', community: 'Comunidad' },
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
    nav: { work: 'How I work', stack: 'Stack', experience: 'Experience', community: 'Community' },
  },
} as const;

export function navigation(lang: Lang) {
  return sectionKeys.map((key) => ({ key, label: ui[lang].nav[key], href: routes[key][lang] }));
}
