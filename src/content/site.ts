import type { Lang } from '../i18n';

export interface SocialLink {
  label: string;
  href: string;
}

export const site = {
  name: 'Rubén Sánchez',
  role: 'Frontend Engineer & Tech Lead',
  location: { es: 'Almería, España', en: 'Almería, Spain' } satisfies Record<Lang, string>,
  /** TODO(Rubén): sustituir por el email/dominio reales antes de publicar. */
  email: 'hola@tudominio.dev',
  description: {
    es: 'Frontend Engineer y Tech Lead. Arquitectura frontend con Angular y microfrontends, desarrollo con agentes de IA y calidad de producto.',
    en: 'Frontend Engineer and Tech Lead. Frontend architecture with Angular and microfrontends, AI agent-driven development and product quality.',
  } satisfies Record<Lang, string>,
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Almería Tech', href: 'https://almeriatech.dev/' },
  ] satisfies SocialLink[],
} as const;
