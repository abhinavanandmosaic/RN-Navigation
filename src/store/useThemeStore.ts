import { create, StateCreator } from 'zustand';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeState {
  mode: ThemeMode;
  colors: {
    primary: string;
    background: string;
    text: string;
    border: string;
  };
  setMode: (mode: ThemeMode) => void;
  setColors: (colors: Partial<ThemeState['colors']>) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: 'light',
  colors: {
    primary: '#228B22',
    background: '#FFFFFF',
    text: '#000000',
    border: '#E0E0E0',
  },
  setMode: (mode) => set({ mode }),
  setColors: (newColors) => set((state) => ({
    colors: { ...state.colors, ...newColors },
  })),
})); 