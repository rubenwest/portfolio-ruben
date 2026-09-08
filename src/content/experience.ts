export interface ExperienceEntry {
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

export const experience: ExperienceEntry[] = [
  {
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
];

const MONTHS = [
  'ene', 'feb', 'mar', 'abr', 'may', 'jun',
  'jul', 'ago', 'sep', 'oct', 'nov', 'dic',
];

/** '2024-08' → 'ago 2024'; 'current' → 'Actualidad' */
export function formatDate(value: string): string {
  if (value === 'current') return 'Actualidad';
  const [year, month] = value.split('-');
  const monthIndex = Number(month) - 1;
  const label = MONTHS[monthIndex];
  return label ? `${label} ${year}` : year;
}

/** Duración legible entre dos fechas del dataset. */
export function formatRange(start: string, end: string): string {
  return `${formatDate(start)} — ${formatDate(end)}`;
}
