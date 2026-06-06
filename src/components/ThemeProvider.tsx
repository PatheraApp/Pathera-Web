'use client';

import { createContext, useCallback, useContext, useState } from 'react';

import { THEME_COOKIE } from '@/lib/theme-cookie';
import type { ThemeMode } from '@/lib/theme';

type Ctx = {
  theme: ThemeMode;
  toggle: () => void;
  setTheme: (t: ThemeMode) => void;
};

const ThemeContext = createContext<Ctx | null>(null);

function persistTheme(t: ThemeMode) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem(THEME_COOKIE, t);
  document.cookie = `${THEME_COOKIE}=${t};path=/;max-age=31536000;SameSite=Lax`;
}

type Props = {
  children: React.ReactNode;
  initialTheme: ThemeMode;
};

export function ThemeProvider({ children, initialTheme }: Props) {
  const [theme, setThemeState] = useState<ThemeMode>(initialTheme);

  const setTheme = useCallback((t: ThemeMode) => {
    setThemeState(t);
    persistTheme(t);
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
