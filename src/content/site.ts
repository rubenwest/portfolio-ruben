import type { Lang } from '../i18n';

export interface SocialLink {
  label: string;
  href: string;
}

export const site = {
  name: 'Rubén Sánchez',
  role: 'Frontend Engineer & Tech Lead',
  location: { es: 'Almería, España', en: 'Almería, Spain' } satisfies Record<Lang, string>,
  email: 'rubensg90@gmail.com',
  /** Teléfono en formato internacional sin '+', como lo piden wa.me y t.me. */
  phone: '34600797224',
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

/** Canales de contacto, en el orden en que se muestran. */
export function contactLinks(lang: Lang) {
  const greeting = {
    es: 'Hola Rubén, vengo de tu portfolio.',
    en: "Hi Rubén, I found you through your portfolio.",
  }[lang];
  return [
    { key: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${site.phone}?text=${encodeURIComponent(greeting)}` },
    { key: 'telegram', label: 'Telegram', href: `https://t.me/+${site.phone}` },
    { key: 'email', label: 'Email', href: `mailto:${site.email}` },
  ] as const;
}
