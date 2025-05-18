import { create } from 'zustand';

type ScreenStore = {
  tabScreenIndices: Record<number, number>; // { 0: 0, 1: 1 }
  setTabScreenIndex: (tabIndex: number, screenIndex: number) => void;
  getCurrentScreenIndex: (tabIndex: number) => number;
};

export const useCurrentScreenStore = create<ScreenStore>((set, get) => ({
  tabScreenIndices: {},
  setTabScreenIndex: (tabIndex, screenIndex) =>
    set((state) => ({
      tabScreenIndices: {
        ...state.tabScreenIndices,
        [tabIndex]: screenIndex,
      },
    })),
  getCurrentScreenIndex: (tabIndex) => get().tabScreenIndices[tabIndex] ?? 0,
}));
