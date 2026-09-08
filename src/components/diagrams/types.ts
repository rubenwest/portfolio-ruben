import type { PixelIconName } from '../pixel-icons/icon-data';

/**
 * Coordenadas en porcentaje sobre la caja del diagrama (0-100 en ambos ejes),
 * fijadas a mano por sección: nada de layout automático.
 */
export interface DiagramNode {
  icon: PixelIconName;
  label: string;
  /** Posición horizontal del icono, en %. */
  x: number;
  /** Posición vertical del icono, en %. */
  y: number;
  /** Punto de anclaje del conector en la card central, en %. */
  to: { x: number; y: number };
  /** Primer tramo del conector: horizontal o vertical. */
  first?: 'h' | 'v';
}
