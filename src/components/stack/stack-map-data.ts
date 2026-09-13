/**
 * Datos del mapa del stack: iconos 16x16 redibujados en pixel art (no son los
 * logos originales) y posición de cada pieza sobre la rejilla del panel.
 *
 * La rejilla es de 12 columnas x 7,5 filas. Las coordenadas van en % del
 * panel y caen en el centro de una celda.
 */

export const palette = {
  K: '#151515',
  D: '#3a3a3e',
  G: '#8d8d93',
  L: '#d6d6da',
  W: '#ffffff',
  O: '#ff5100',
  Y: '#ffc043',
  R: '#dd0031',
  r: '#a6002a',
  B: '#3178c6',
  C: '#1abcfe',
  S: '#ff4785',
  P: '#e535ab',
  p: '#9c1a78',
  V: '#a259ff',
  N: '#0acf83',
  F: '#f24e1e',
  f: '#ff7262',
  T: '#69d3a7',
  J: '#c21325',
  A: '#d97757',
  n: '#143055',
} as const;

export const icons = {
  frontend: [
    '................',
    '.KKKKKKKKKKKKKK.',
    '.KORYKKKKKKKKKK.',
    '.KKKKKKKKKKKKKK.',
    '.KWWWWWWWWWWWWK.',
    '.KWWWWWWWWWWWWK.',
    '.KWWWBWWWWBWWWK.',
    '.KWWBWWWWWWBWWK.',
    '.KWBWWWOWWWWBWK.',
    '.KWWBWWOWWWBWWK.',
    '.KWWWBWOWWBWWWK.',
    '.KWWWWWWWWWWWWK.',
    '.KWWWWWWWWWWWWK.',
    '.KKKKKKKKKKKKKK.',
    '................',
    '................',
  ],
  architecture: [
    '................',
    '.....OOOOOO.....',
    '.....OYYYYO.....',
    '.....OOOOOO.....',
    '.......KK.......',
    '...KKKKKKKKKK...',
    '...K........K...',
    '.BBBBB....CCCCC.',
    '.BLLLB....CLLLC.',
    '.BBBBB....CCCCC.',
    '...K........K...',
    '...K........K...',
    '.GGGGGGGGGGGGGG.',
    '.GLLLLLLLLLLLLG.',
    '.GGGGGGGGGGGGGG.',
    '................',
  ],
  ai: [
    '.......YY.......',
    '.......KK.......',
    '...KKKKKKKKKK...',
    '..KLLLLLLLLLLK..',
    '..KLKKKLLKKKLK..',
    '..KLKOKLLKOKLK..',
    '..KLKKKLLKKKLK..',
    '..KLLLLLLLLLLK..',
    '..KLLKKKKKKLLK..',
    '..KLLLLLLLLLLK..',
    '...KKKKKKKKKK...',
    '.....KOOOOK.....',
    '...KKKOOOOKKK...',
    '..KLKKOOOOKKLK..',
    '..KLKKKKKKKKLK..',
    '................',
  ],
  quality: [
    '................',
    '.......KK.......',
    '.....KKNNKK.....',
    '...KKNNNNNNKK...',
    '..KNNNNNNNNNNK..',
    '..KNNNNNNNNWNK..',
    '..KNNNNNNNWWNK..',
    '..KNWNNNNWWNNK..',
    '..KNWWNNWWNNNK..',
    '...KNWWWWNNNK...',
    '...KNNWWNNNNK...',
    '....KNNNNNNK....',
    '.....KNNNNK.....',
    '......KNNK......',
    '.......KK.......',
    '................',
  ],
  angular: [
    '.......RR.......',
    '.....RRRRrr.....',
    '...RRRRRRrrrr...',
    '.RRRRRRRRrrrrrr.',
    '.RRRRRRWWrrrrrr.',
    '.RRRRRRWWrrrrrr.',
    '..RRRRWWWWrrrr..',
    '..RRRRWrrWrrrr..',
    '..RRRWWWWWWrrr..',
    '...RRWRRrrWrr...',
    '...RWWRRrrWWr...',
    '....RRRRrrrr....',
    '.....RRRrrr.....',
    '......RRrr......',
    '.......Rr.......',
    '................',
  ],
  typescript: [
    '................',
    '.BBBBBBBBBBBBBB.',
    '.BBBBBBBBBBBBBB.',
    '.BBBBBBBBBBBBBB.',
    '.BBBBBBBBBBBBBB.',
    '.BBBBBBBBBBBBBB.',
    '.BBBBBBBBBBBBBB.',
    '.BBBBBBBBBBBBBB.',
    '.BWWWBBBWWWBBBB.',
    '.BBWBBBWBBBBBBB.',
    '.BBWBBBBWWBBBBB.',
    '.BBWBBBBBBWBBBB.',
    '.BBWBBBWWWBBBBB.',
    '.BBBBBBBBBBBBBB.',
    '.BBBBBBBBBBBBBB.',
    '................',
  ],
  figma: [
    '................',
    '................',
    '....FFFFffff....',
    '...FFFFFfffff...',
    '...FFFFFfffff...',
    '....FFFFffff....',
    '....VVVV.CC.....',
    '...VVVVVCCCC....',
    '...VVVVVCCCC....',
    '....VVVV.CC.....',
    '....NNNN........',
    '...NNNNN........',
    '...NNNNN........',
    '....NNNN........',
    '................',
    '................',
  ],
  rxjs: [
    '................',
    '.....pppppp.....',
    '...ppPPPPPPpp...',
    '..pPPPPWWWPPPp..',
    '.pPPPWWPPPWWPPp.',
    '.pPPWPPPPPPWPPp.',
    'pPPWPPPPPPPPPPPp',
    'pPPWPPPPPPPPPPPp',
    'pPPWPPPPPPPPWPPp',
    'pPPPWPPPPPPWPPPp',
    '.pPPPWWPPPWPPPp.',
    '.pPPPPPWWWPPPPp.',
    '..pPPPPPPPPPPp..',
    '...ppPPPPPPpp...',
    '.....pppppp.....',
    '................',
  ],
  nx: [
    '................',
    '.nnnnnnnnnnnnnn.',
    '.nnnnnnnnnnnnnn.',
    '.nnnnnnnnnnnnnn.',
    '.nWnnnWnnnnnnnn.',
    '.nWWnnWnnnnnnnn.',
    '.nWnWnWnWnnnWnn.',
    '.nWnnWWnnWnWnnn.',
    '.nWnnnWnnnWnnnn.',
    '.nWnnnWnnWnWnnn.',
    '.nWnnnWnWnnnWnn.',
    '.nnnnnnnnnnnnnn.',
    '.nnnnnnnnnnnnnn.',
    '.nnnnnnnnnnnnnn.',
    '.nnnnnnnnnnnnnn.',
    '................',
  ],
  storybook: [
    '................',
    '..SSSSSSSSSSWW..',
    '..SSSSSSSSSSWS..',
    '..SSSSSSSSSSSS..',
    '..SSSSWWWWSSSS..',
    '..SSSWWSSSSSSS..',
    '..SSSWWSSSSSSS..',
    '..SSSSWWWSSSSS..',
    '..SSSSSSWWSSSS..',
    '..SSSSSSSWWSSS..',
    '..SSSSSSSWWSSS..',
    '..SSSWWWWWSSSS..',
    '..SSSSSSSSSSSS..',
    '..SSSSSSSSSSSS..',
    '................',
    '................',
  ],
  claude: [
    '................',
    '.......AA.......',
    '..A....AA....A..',
    '...A...AA...A...',
    '....A..AA..A....',
    '.....A.AA.A.....',
    '......AAAA......',
    'AAAAAAAAAAAAAAAA',
    'AAAAAAAAAAAAAAAA',
    '......AAAA......',
    '.....A.AA.A.....',
    '....A..AA..A....',
    '...A...AA...A...',
    '..A....AA....A..',
    '.......AA.......',
    '................',
  ],
  copilot: [
    '................',
    '................',
    '...KKKK..KKKK...',
    '..KLLLLKKLLLLK..',
    '.KLLDDLKKLDDLLK.',
    '.KLLDDLKKLDDLLK.',
    '.KLLLLLKKLLLLLK.',
    '.KKLLLKKKKLLLKK.',
    'KDKKKKKKKKKKKKDK',
    'KDKDDDDDDDDDDKDK',
    'KDKDYDDDDDDYDKDK',
    'KDKDYDDDDDDYDKDK',
    '.KKDDDDDDDDDDKK.',
    '...KKKKKKKKKK...',
    '................',
    '................',
  ],
  cypress: [
    '................',
    '.....KKKKKK.....',
    '...KKKKKKKKKK...',
    '..KKKKKKKKKKKK..',
    '.KKKKKKKKKKKKKK.',
    '.KKKKKKKKKKKKKK.',
    'KKTTTKKTKKKTKKKK',
    'KTKKKKKTKKKTKKKK',
    'KTKKKKKKTKTKKKKK',
    'KTKKKKKKKTKKKKKK',
    'KKTTTKKKKTKKKKKK',
    '.KKKKKKKTKKKKKK.',
    '..KKKKKTKKKKKK..',
    '...KKKKKKKKKK...',
    '.....KKKKKK.....',
    '................',
  ],
  jest: [
    '................',
    '.JJJJJJJJJJJJJJ.',
    '.JJJJJJJJJJJJJJ.',
    '.JJJJJWWWWWJJJJ.',
    '.JJJJJJJWWJJJJJ.',
    '.JJJJJJJWWJJJJJ.',
    '.JJJJJJJWWJJJJJ.',
    '.JJJJJJJWWJJJJJ.',
    '.JJJJJJJWWJJJJJ.',
    '.JJJJJJJWWJJJJJ.',
    '.JJWWJJJWWJJJJJ.',
    '.JJWWJJJWWJJJJJ.',
    '.JJJWWWWWJJJJJJ.',
    '.JJJJJJJJJJJJJJ.',
    '.JJJJJJJJJJJJJJ.',
    '................',
  ],
} as const satisfies Record<string, readonly string[]>;

export type MapIcon = keyof typeof icons;

export type LayerKey = 'frontend' | 'architecture' | 'ai' | 'quality';

/** Centro vertical de cada capa (pastilla) en % del panel. */
export const layerY: Record<LayerKey, number> = {
  frontend: 33.33,
  architecture: 46.67,
  ai: 60,
  quality: 73.33,
};

/** Bordes de la columna de pastillas, en %. */
export const PILL_LEFT = 35;
export const PILL_RIGHT = 65;
export const PILL_HALF_HEIGHT = 4.7;

export interface MapTool {
  name: string;
  icon: MapIcon;
  layer: LayerKey;
  x: number;
  y: number;
  /** Por dónde entra el cable en la pastilla. */
  side: 'left' | 'right' | 'top' | 'bottom';
}

export const tools: MapTool[] = [
  { name: 'Angular', icon: 'angular', layer: 'frontend', x: 12.5, y: 6.67, side: 'left' },
  { name: 'TypeScript', icon: 'typescript', layer: 'frontend', x: 37.5, y: 6.67, side: 'top' },
  { name: 'Figma', icon: 'figma', layer: 'frontend', x: 62.5, y: 6.67, side: 'top' },
  { name: 'RxJS', icon: 'rxjs', layer: 'frontend', x: 87.5, y: 20, side: 'right' },
  { name: 'Nx', icon: 'nx', layer: 'architecture', x: 4.17, y: 46.67, side: 'left' },
  { name: 'Storybook', icon: 'storybook', layer: 'architecture', x: 95.83, y: 46.67, side: 'right' },
  { name: 'Claude Code', icon: 'claude', layer: 'ai', x: 20.83, y: 86.67, side: 'left' },
  { name: 'Copilot', icon: 'copilot', layer: 'ai', x: 79.17, y: 86.67, side: 'right' },
  { name: 'Cypress', icon: 'cypress', layer: 'quality', x: 37.5, y: 86.67, side: 'bottom' },
  { name: 'Jest', icon: 'jest', layer: 'quality', x: 62.5, y: 86.67, side: 'bottom' },
];

/**
 * Ancho del viewBox de los cables. El panel es 16:10, así que con un viewBox
 * de 160x100 la escala es uniforme y el trazo se puede animar con su longitud.
 */
export const WIRE_VIEW_WIDTH = 160;

const toPath = (points: [number, number][]) =>
  points
    .map(([x, y], index) => `${index ? 'L' : 'M'} ${(x * WIRE_VIEW_WIDTH) / 100} ${y}`)
    .join(' ');

/** Cable en ángulo recto desde la herramienta hasta su pastilla, y el punto del codo (en %). */
export function wireFor(tool: MapTool): { d: string; dot: [number, number] } {
  const y = layerY[tool.layer];
  switch (tool.side) {
    case 'top': {
      const end = y - PILL_HALF_HEIGHT;
      return { d: toPath([[tool.x, tool.y], [tool.x, end]]), dot: [tool.x, (tool.y + end) / 2] };
    }
    case 'bottom': {
      const end = y + PILL_HALF_HEIGHT;
      return { d: toPath([[tool.x, tool.y], [tool.x, end]]), dot: [tool.x, (tool.y + end) / 2] };
    }
    default: {
      const edge = tool.side === 'left' ? PILL_LEFT : PILL_RIGHT;
      if (tool.y === y) {
        return { d: toPath([[tool.x, y], [edge, y]]), dot: [(tool.x + edge) / 2, y] };
      }
      return { d: toPath([[tool.x, tool.y], [tool.x, y], [edge, y]]), dot: [tool.x, y] };
    }
  }
}
