import type { PixelIconName } from '../components/pixel-icons/icon-data';

export interface StackCategory {
  title: string;
  icon: PixelIconName;
  description: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    title: 'Frontend',
    icon: 'code',
    description: 'El terreno donde paso el día.',
    items: ['Angular 20+', 'TypeScript', 'RxJS / Signals', 'Web Components', 'CSS moderno'],
  },
  {
    title: 'Arquitectura',
    icon: 'briefcase',
    description: 'Decisiones que sobreviven al segundo año.',
    items: ['Microfrontends', 'Design systems', 'Monorepos (Nx)', 'Contratos de integración'],
  },
  {
    title: 'IA aplicada',
    icon: 'robot',
    description: 'Herramienta diaria, no demo de conferencia.',
    items: ['Claude Code', 'GitHub Copilot', 'Agentes y MCP', 'Prompting para refactors'],
  },
  {
    title: 'Calidad',
    icon: 'check',
    description: 'Lo que permite ir rápido sin romper nada.',
    items: ['Jest', 'Cypress', 'Testing Library', 'CI/CD', 'Code review'],
  },
];

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
