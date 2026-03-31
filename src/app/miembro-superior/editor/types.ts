// Tipos genéricos para los editores de zonas

export type ZoneDesktop = {
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  dir?: string | null;
};

export type ZoneMobile = {
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  dir: string;
};

export type ViewKey = string; // Clave genérica para cualquier vista

export type ZonesData = {
  desktop: Record<ViewKey, ZoneDesktop[]>;
  mobile: Record<ViewKey, ZoneMobile[]>;
};

export type ImageView = {
  key: ViewKey;
  src: string;
  title: string;
};

export type EditorProps = {
  images: ImageView[];
  initialData?: ZonesData;
  onSave?: (data: ZonesData) => void;
  storageKey?: string;
};

export const DIRECTION_OPTIONS = [
  { value: 'tl', label: '↖' },
  { value: 'u', label: '↑' },
  { value: 'tr', label: '↗' },
  { value: 'l', label: '←' },
  { value: 'none', label: '✕' },
  { value: 'r', label: '→' },
  { value: 'bl', label: '↙' },
  { value: 'd', label: '↓' },
  { value: 'br', label: '↘' },
];

export const PRESETS = [
  { w: 100, h: 24, label: '100×24' },
  { w: 120, h: 26, label: '120×26' },
  { w: 130, h: 28, label: '130×28' },
  { w: 150, h: 30, label: '150×30' },
  { w: 180, h: 32, label: '180×32' },
];