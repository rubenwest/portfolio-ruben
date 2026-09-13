import type { Lang } from '../i18n';

export interface ExperienceEntry {
  /** Ancla en la línea de tiempo; el hub de experiencia enlaza aquí. */
  id: string;
  role: string;
  company: string;
  location: string;
  /** Formato YYYY-MM */
  start: string;
  /** Formato YYYY-MM o 'current' */
  end: string;
  /** true → se muestra expandida por defecto */
  highlight: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
}

export const experience: Record<Lang, ExperienceEntry[]> = {
  es: [
    {
      id: 'xp-ayesa',
      role: 'Frontend Engineer & Tech Lead',
      company: 'Ayesa Ibermática',
      location: 'España',
      start: '2024-08',
      end: 'current',
      highlight: true,
      summary:
        'Arquitectura frontend de la transformación digital de la Generalitat Valenciana.',
      bullets: [
        'Lidero la arquitectura frontend de la transformación digital de la Generalitat Valenciana, migrando Oracle Forms legacy a Angular 20+.',
        'Arquitectura modular basada en microfrontends para mejorar la escalabilidad y la autonomía de los equipos.',
        'Decisiones técnicas sobre Angular, TypeScript, componentes reutilizables y patrones de integración.',
        'Mentoría técnica y mejora de la Developer Experience del equipo.',
      ],
      tags: ['Angular 20+', 'Microfrontends', 'TypeScript', 'Tech Lead'],
    },
    {
      id: 'xp-twenix',
      role: 'Frontend Engineer',
      company: 'Twenix',
      location: 'España',
      start: '2021-05',
      end: '2024-07',
      highlight: true,
      summary: 'Producto EdTech en crecimiento, de startup a escala.',
      bullets: [
        'Interfaces de alto rendimiento para una plataforma EdTech en crecimiento (Angular, RxJS, TypeScript).',
        'Estrategias de testing con Jest y Cypress que redujeron los bugs en producción.',
        'Colaboración estrecha con producto y diseño (Figma / Storybook).',
      ],
      tags: ['Angular', 'RxJS', 'Cypress', 'Jest'],
    },
    {
      id: 'xp-viewnext',
      role: 'Backend Engineer',
      company: 'Viewnext / Tecnocom',
      location: 'España',
      start: '2011-01',
      end: '2021-03',
      highlight: false,
      summary: 'Una década en sistemas bancarios críticos.',
      bullets: [
        '10 años en sistemas bancarios críticos para Cajamar (PL/SQL, COBOL, UNIX Shell Scripting).',
        'Entornos regulados de alta exigencia en calidad, estabilidad y trazabilidad.',
      ],
      tags: ['PL/SQL', 'COBOL', 'Banca'],
    },
  ],
  en: [
    {
      id: 'xp-ayesa',
      role: 'Frontend Engineer & Tech Lead',
      company: 'Ayesa Ibermática',
      location: 'Spain',
      start: '2024-08',
      end: 'current',
      highlight: true,
      summary:
        'Frontend architecture for the Generalitat Valenciana digital transformation.',
      bullets: [
        'I lead the frontend architecture of the Generalitat Valenciana (Valencian regional government) digital transformation, moving legacy Oracle Forms to Angular 20+.',
        'Modular, microfrontend-based architecture so the platform scales and teams can ship on their own.',
        'Technical decisions on Angular, TypeScript, reusable components and integration patterns.',
        'Mentoring and improving the developer experience across the team.',
      ],
      tags: ['Angular 20+', 'Microfrontends', 'TypeScript', 'Tech Lead'],
    },
    {
      id: 'xp-twenix',
      role: 'Frontend Engineer',
      company: 'Twenix',
      location: 'Spain',
      start: '2021-05',
      end: '2024-07',
      highlight: true,
      summary: 'A growing EdTech product, from startup to scale.',
      bullets: [
        'Fast, high-performance interfaces for a growing EdTech platform (Angular, RxJS, TypeScript).',
        'Testing strategy with Jest and Cypress that cut down production bugs.',
        'Worked closely with product and design (Figma / Storybook).',
      ],
      tags: ['Angular', 'RxJS', 'Cypress', 'Jest'],
    },
    {
      id: 'xp-viewnext',
      role: 'Backend Engineer',
      company: 'Viewnext / Tecnocom',
      location: 'Spain',
      start: '2011-01',
      end: '2021-03',
      highlight: false,
      summary: 'Ten years on critical banking systems.',
      bullets: [
        '10 years on critical banking systems for Cajamar (PL/SQL, COBOL, UNIX shell scripting).',
        'Regulated environments with strict demands on quality, stability and traceability.',
      ],
      tags: ['PL/SQL', 'COBOL', 'Banking'],
    },
  ],
};

const MONTHS: Record<Lang, string[]> = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const PRESENT: Record<Lang, string> = { es: 'Actualidad', en: 'Present' };

/** '2024-08' → 'ago 2024'; 'current' → 'Actualidad' */
export function formatDate(value: string, lang: Lang): string {
  if (value === 'current') return PRESENT[lang];
  const [year, month] = value.split('-');
  const label = MONTHS[lang][Number(month) - 1];
  return label ? `${label} ${year}` : (year ?? value);
}

/** Duración legible entre dos fechas del dataset. */
export function formatRange(start: string, end: string, lang: Lang): string {
  return `${formatDate(start, lang)} — ${formatDate(end, lang)}`;
}
