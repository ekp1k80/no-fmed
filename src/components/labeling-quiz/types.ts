export interface Zone {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  dir: string | null;
}

export interface ZonesData {
  desktop: {
    posterior: Zone[];
    anterior: Zone[];
    postMusculatura: Zone[];
    antMusculatura: Zone[];
  };
  mobile: {
    posterior: Zone[];
    anterior: Zone[];
    postMusculatura: Zone[];
    antMusculatura: Zone[];
  };
}

export type ViewKey = 'posterior' | 'anterior' | 'postMusculatura' | 'antMusculatura';

export type Mode = 'drag' | 'dd-easy' | 'dd-hard' | 'mobile-easy' | 'mobile-hard';

export interface ViewMeta {
  img: string;
  title: string;
}

export const VIEW_META: Record<ViewKey, ViewMeta> = {
  posterior: { img: "/miembro-superior/img/posterior.png", title: "Post. Hueso" },
  anterior: { img: "/miembro-superior/img/anterior.png", title: "Ant. Hueso" },
  postMusculatura: { img: "/miembro-superior/img/posterior_musculatura.png", title: "Post. Músculos" },
  antMusculatura: { img: "/miembro-superior/img/anterior_musculatura.png", title: "Ant. Músculos" },
};