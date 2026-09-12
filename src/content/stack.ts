import type { PixelIconName } from '../components/pixel-icons/icon-data';
import type { Lang } from '../i18n';

export interface StackCategory {
  title: string;
  icon: PixelIconName;
  description: string;
  items: string[];
}

export const stack: Record<Lang, StackCategory[]> = {
  es: [
    {
      title: 'Frontend',
      icon: 'code',
      description: 'Donde paso la mayor parte del día.',
      items: ['Angular 20+', 'TypeScript', 'RxJS / Signals', 'Web Components', 'CSS moderno'],
    },
    {
      title: 'Arquitectura',
      icon: 'briefcase',
      description: 'Decisiones que tienen que seguir valiendo dentro de dos años.',
      items: ['Microfrontends', 'Design systems', 'Monorepos (Nx)', 'Contratos de integración'],
    },
    {
      title: 'IA aplicada',
      icon: 'robot',
      description: 'La uso a diario en modo agente, en proyectos reales.',
      items: ['Claude Code', 'Pipelines multiagente', 'Agentes propios', 'MCP', 'GitHub Copilot'],
    },
    {
      title: 'Calidad',
      icon: 'check',
      description: 'Lo que me deja ir rápido sin romper cosas.',
      items: ['Jest', 'Cypress', 'Testing Library', 'CI/CD', 'Code review'],
    },
  ],
  en: [
    {
      title: 'Frontend',
      icon: 'code',
      description: 'Where I spend most of my day.',
      items: ['Angular 20+', 'TypeScript', 'RxJS / Signals', 'Web Components', 'Modern CSS'],
    },
    {
      title: 'Architecture',
      icon: 'briefcase',
      description: 'Decisions that still need to hold up two years from now.',
      items: ['Microfrontends', 'Design systems', 'Monorepos (Nx)', 'Integration contracts'],
    },
    {
      title: 'Applied AI',
      icon: 'robot',
      description: 'I use it every day in agent mode, on real projects.',
      items: ['Claude Code', 'Multi-agent pipelines', 'Custom agents', 'MCP', 'GitHub Copilot'],
    },
    {
      title: 'Quality',
      icon: 'check',
      description: 'What lets me move fast without breaking things.',
      items: ['Jest', 'Cypress', 'Testing Library', 'CI/CD', 'Code review'],
    },
  ],
};

/** Tecnologías del marquee. `mono: true` se pinta en versalitas monoespaciadas. */
export const marqueeItems: string[] = [
  'Angular',
  'TypeScript',
  'RxJS',
  'Signals',
  'Nx',
  'Claude Code',
  'GitHub Copilot',
  'Cypress',
  'Jest',
  'Storybook',
  'Figma',
  'Vite',
  'Astro',
  'Node.js',
  'Git',
  'CSS',
];
