import type { Lang } from '../i18n';
import type { PixelIconName } from '../components/pixel-icons/icon-data';

export interface Project {
  /** Ancla dentro de la página de proyectos. */
  id: string;
  name: string;
  /** Año en que se hizo el grueso del trabajo. */
  year: string;
  icon: PixelIconName;
  /** Una frase: qué es y por qué merece estar aquí. */
  tagline: string;
  /** Dos o tres frases con la parte interesante de ingeniería. */
  body: string;
  tags: string[];
  /** Solo si el repositorio es público; si no, se muestra el aviso de código privado. */
  repo?: string;
  demo?: string;
  /** El destacado abre la rejilla a todo el ancho. */
  featured?: boolean;
}

const shared = {
  'dublin-bus': {
    id: 'dublin-bus',
    year: '2026',
    icon: 'bolt',
    featured: true,
    tags: ['Node 20', 'GTFS-Realtime', 'Supabase', 'Datos'],
    repo: 'https://github.com/rubenwest/dublin-bus',
    demo: 'https://rubenwest.github.io/dublin-bus/',
  },
  zyra: {
    id: 'zyra',
    year: '2026',
    icon: 'briefcase',
    tags: ['Next.js 15', 'React 19', 'Supabase', 'TypeScript'],
    demo: 'https://zyra-rose.vercel.app',
  },
  'ruben-trade': {
    id: 'ruben-trade',
    year: '2026',
    icon: 'robot',
    tags: ['Angular', 'NestJS', 'Monorepo', 'Testing'],
    demo: 'https://ruben-trade.vercel.app',
  },
  'vital-queue': {
    id: 'vital-queue',
    year: '2026',
    icon: 'check',
    tags: ['Angular 20', 'TypeScript', 'Arquitectura', 'Tests'],
    repo: 'https://github.com/rubenwest/vital-queue',
  },
  'tribu-ikigai': {
    id: 'tribu-ikigai',
    year: '2026',
    icon: 'globe',
    tags: ['Astro', 'Estático', 'Sanity', 'Cliente real'],
  },
  'fever-challenge': {
    id: 'fever-challenge',
    year: '2026',
    icon: 'rocket',
    tags: ['Angular', 'Core Web Vitals', 'Sin librerías', 'Challenge'],
    repo: 'https://github.com/rubenwest/fever-challenge',
  },
  'job-radar': {
    id: 'job-radar',
    year: '2025',
    icon: 'react',
    tags: ['Next.js 15', 'React 19', 'Tailwind 4', 'Express + Prisma'],
    repo: 'https://github.com/rubenwest/job-radar',
    demo: 'https://job-radar-chi.vercel.app',
  },
} as const;

type Key = keyof typeof shared;
type Copy = Pick<Project, 'name' | 'tagline' | 'body'>;

const copy: Record<Lang, Record<Key, Copy>> = {
  es: {
    'dublin-bus': {
      name: 'Llegadas de bus en Dublín',
      tagline: 'Una app de llegadas que, además de los minutos, mide cuánto se equivoca la predicción oficial.',
      body: 'Los minutos que faltan ya los da la app de la NTA. Lo que no da nadie es cuánto se desvía esa predicción de la realidad, así que monté un recolector sobre el feed GTFS-Realtime que guarda un histórico propio y compara lo prometido con lo cumplido. La parte difícil no es la interfaz: es domar 700 MB de estáticos GTFS, un feed lleno de trampas y un histórico que no se puede regenerar.',
    },
    zyra: {
      name: 'Zyra',
      tagline: 'Gestión para freelancers: facturación, horas, clientes y feedback en un solo sitio.',
      body: 'Next.js 15 con App Router y React 19 sobre Supabase, desplegado en Vercel. Incluye una integración con Telegram para registrar actividad y vincular cuentas sin abrir la aplicación. Es el proyecto donde mejor se ve cómo llevo un producto entero, de la base de datos a la interfaz.',
    },
    'ruben-trade': {
      name: 'Ruben Trade',
      tagline: 'Experimento técnico: comparar agentes de inversión autónomos con reglas transparentes.',
      body: 'Monorepo con Angular en el front y NestJS en la API, integrado contra la cuenta de práctica (Demo) de Trading 212. Las órdenes están desactivadas por defecto y protegidas con clave de idempotencia, y los tests corren sin credenciales reales. Ahora mismo valida la integración: no ejecuta decisiones automáticas ni mueve dinero real.',
    },
    'vital-queue': {
      name: 'VitalQueue',
      tagline: 'Panel de colas de urgencias en Angular, con las decisiones de arquitectura escritas.',
      body: 'Estructura core / shared / features donde la funcionalidad de cola es dueña de sus páginas, servicios y modelos, sin capas de más. Lo interesante no es solo el código: el README explica por qué es pragmático para un ejercicio acotado y qué separaría en dominio / aplicación / infraestructura si el producto creciera.',
    },
    'tribu-ikigai': {
      name: 'Tribu Ikigai',
      tagline: 'La web de un espacio de Almería. Cliente real, plazos reales.',
      body: 'Astro y sitio estático: rápido de servir, barato de alojar y sin servidor que mantener. Hoy el contenido se edita en el propio repositorio, con la estructura ya preparada para enchufar Sanity cuando el equipo quiera llevarlo sin tocar código.',
    },
    'fever-challenge': {
      name: 'Fever Pets',
      tagline: 'Challenge técnico resuelto con la restricción de no usar nada fuera de Angular.',
      body: 'Sin librerías externas al ecosistema de Angular, priorizando Core Web Vitals y escalabilidad. Sirve como muestra de código limpio: se ve cómo estructuro, cómo nombro y dónde pongo el límite entre lo que merece una abstracción y lo que no.',
    },
    'job-radar': {
      name: 'Job Radar',
      tagline: 'Un radar de ofertas remotas montado sobre la API pública de RemoteOK.',
      body: 'Next.js 15 con App Router y React 19: el listado se sirve cacheado con revalidación cada hora, así la página va instantánea y la API de origen no se castiga en cada visita. Empecé además un backend aparte con Express 5 y Prisma sobre PostgreSQL para guardar los favoritos en servidor; está en los cimientos y ahí sigue, que también es parte de la verdad.',
    },
  },
  en: {
    'dublin-bus': {
      name: 'Dublin bus arrivals',
      tagline: 'An arrivals app that also measures how wrong the official prediction is.',
      body: "The NTA app already tells you how many minutes are left. What nobody tells you is how far that prediction drifts from reality, so I built a collector on top of the GTFS-Realtime feed that keeps its own history and compares what was promised against what happened. The hard part isn't the interface: it's taming 700 MB of GTFS static data, a feed full of traps and a history that cannot be regenerated.",
    },
    zyra: {
      name: 'Zyra',
      tagline: 'Freelance management: invoicing, time tracking, clients and feedback in one place.',
      body: 'Next.js 15 with the App Router and React 19 on Supabase, deployed to Vercel. It includes a Telegram integration to log activity and link accounts without opening the app. This is the project that best shows how I carry a whole product, from the database to the interface.',
    },
    'ruben-trade': {
      name: 'Ruben Trade',
      tagline: 'A technical experiment: comparing autonomous investing agents with transparent rules.',
      body: 'A monorepo with Angular on the front end and NestJS on the API, wired to the Trading 212 paper trading (Demo) account. Orders are off by default and guarded by an idempotency key, and the tests run without real credentials. Right now it validates the integration: it makes no automated decisions and moves no real money.',
    },
    'vital-queue': {
      name: 'VitalQueue',
      tagline: 'An ER queue dashboard in Angular, with the architecture decisions written down.',
      body: 'A core / shared / features structure where the queue feature owns its pages, services and models, with no extra layers. The code is not the only interesting part: the README explains why this is pragmatic for a time-boxed exercise, and what I would split into domain / application / infrastructure if the product grew.',
    },
    'tribu-ikigai': {
      name: 'Tribu Ikigai',
      tagline: 'The website of a space in Almería. A real client, on a real deadline.',
      body: 'Astro and a static site: fast to serve, cheap to host, no server to maintain. Content is edited in the repository today, with the structure already prepared to plug in Sanity whenever the team wants to run it without touching code.',
    },
    'fever-challenge': {
      name: 'Fever Pets',
      tagline: 'A technical challenge solved under the constraint of using nothing outside Angular.',
      body: 'No libraries beyond the Angular ecosystem, with Core Web Vitals and scalability as the priorities. A useful clean-code sample: you can see how I structure things, how I name them, and where I draw the line between what deserves an abstraction and what does not.',
    },
    'job-radar': {
      name: 'Job Radar',
      tagline: 'A radar for remote job openings, built on the public RemoteOK API.',
      body: 'Next.js 15 with the App Router and React 19: the listing is served from cache and revalidated hourly, so the page feels instant and the upstream API is not hammered on every visit. I also started a separate backend with Express 5 and Prisma on PostgreSQL to keep favourites server-side; it is still at foundation level, and that is part of the honest picture too.',
    },
  },
};

/** Orden en el que se muestran; el destacado va primero. */
const order: Key[] = ['dublin-bus', 'zyra', 'ruben-trade', 'vital-queue', 'tribu-ikigai', 'fever-challenge', 'job-radar'];

/** `tags` se copia porque `shared` es readonly y `Project` no. */
const build = (lang: Lang): Project[] =>
  order.map((key) => ({ ...shared[key], tags: [...shared[key].tags], ...copy[lang][key] }));

export const projects: Record<Lang, Project[]> = { es: build('es'), en: build('en') };
