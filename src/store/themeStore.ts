import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeMode } from '../data/types';

type ThemeState = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

const applyTheme = (theme: ThemeMode) => {
  document.documentElement.setAttribute('data-theme', theme);
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
      },
      toggleTheme: () => {
        const next = get().theme === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        set({ theme: next });
      },
    }),
    {
      name: 'ashil-portfolio-theme',
      onRehydrateStorage: () => (state) => {
        applyTheme(state?.theme ?? 'dark');
      },
    },
  ),
);

export const initTheme = () => {
  const stored = localStorage.getItem('ashil-portfolio-theme');
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as { state?: { theme?: ThemeMode } };
      applyTheme(parsed.state?.theme ?? 'dark');
      return;
    } catch {
      // fall through
    }
  }
  applyTheme('dark');
};
