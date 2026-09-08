export interface SocialLink {
  label: string;
  href: string;
}

export const site = {
  name: 'Rubén Sánchez',
  role: 'Frontend Engineer & Tech Lead',
  location: 'Almería, España',
  /** TODO(Rubén): sustituir por el email/dominio reales antes de publicar. */
  email: 'hola@tudominio.dev',
  description:
    'Frontend Engineer y Tech Lead. Arquitectura frontend con Angular y microfrontends, desarrollo asistido por IA y calidad de producto.',
  navigation: [
    { label: 'Cómo trabajo', href: '#como-trabajo' },
    { label: 'Stack', href: '#stack' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Comunidad', href: '#comunidad' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Almería Tech', href: 'https://almeriatech.dev/' },
  ] satisfies SocialLink[],
} as const;
