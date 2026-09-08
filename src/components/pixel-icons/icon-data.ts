/**
 * Iconos 8-bit propios, dibujados a mano como rejillas de 8x8.
 * Sin assets de terceros: cada icono es un array de 8 strings de 8 caracteres.
 *
 *   '.' → celda vacía
 *   '1' → tono principal   (--pixel-1)
 *   '2' → tono de acento   (--pixel-2)
 *   '3' → tono terciario   (--pixel-3)
 */
export const ICON_SIZE = 8;

export const icons = {
  /** `< >` — código */
  code: [
    '........',
    '..1..1..',
    '.1....1.',
    '1......1',
    '1......1',
    '.1....1.',
    '..1..1..',
    '........',
  ],
  /** Robot — desarrollo asistido por IA */
  robot: [
    '..1..1..',
    '.111111.',
    '.121121.',
    '.111111.',
    '.122221.',
    '.111111.',
    '..1..1..',
    '........',
  ],
  /** Rayo — rendimiento */
  bolt: [
    '....11..',
    '...11...',
    '..11....',
    '.111111.',
    '....11..',
    '...11...',
    '..11....',
    '........',
  ],
  /** Maletín — liderazgo técnico */
  briefcase: [
    '........',
    '..1111..',
    '..1..1..',
    '11111111',
    '1..22..1',
    '1......1',
    '11111111',
    '........',
  ],
  /** Cohete — producto */
  rocket: [
    '...11...',
    '..1221..',
    '..1221..',
    '.112211.',
    '11122111',
    '1.1111.1',
    '...11...',
    '..2..2..',
  ],
  /** Check — calidad */
  check: [
    '........',
    '......11',
    '.....11.',
    '1...11..',
    '11.11...',
    '.1111...',
    '..11....',
    '........',
  ],
  /** Globo — comunidad */
  globe: [
    '..1111..',
    '.1.11.1.',
    '1..11..1',
    '11111111',
    '1..11..1',
    '.1.11.1.',
    '..1111..',
    '........',
  ],
  /** Terminal — herramientas */
  terminal: [
    '11111111',
    '1......1',
    '1.2....1',
    '1..2.221',
    '1.2....1',
    '1......1',
    '11111111',
    '........',
  ],
  /** Árbol de componentes — arquitectura */
  tree: [
    '...11...',
    '...11...',
    '...11...',
    '.111111.',
    '.1....1.',
    '22....22',
    '22....22',
    '........',
  ],
} as const;

export type PixelIconName = keyof typeof icons;

export interface PixelCell {
  x: number;
  y: number;
  tone: '1' | '2' | '3';
}

/** Convierte la rejilla de un icono en la lista de celdas pintadas. */
export function toCells(name: PixelIconName): PixelCell[] {
  const cells: PixelCell[] = [];
  const grid = icons[name];

  grid.forEach((row, y) => {
    [...row].forEach((char, x) => {
      if (char === '1' || char === '2' || char === '3') {
        cells.push({ x, y, tone: char });
      }
    });
  });

  return cells;
}
