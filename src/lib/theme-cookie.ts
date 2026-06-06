import type { ThemeMode } from './theme';

export const THEME_COOKIE = 'pathera-theme';

export function parseThemeCookie(value: string | undefined): ThemeMode | null {
  if (value === 'light' || value === 'dark') return value;
  return null;
}

export function themeCookieScript(): string {
  return `(function(){try{var t=localStorage.getItem('${THEME_COOKIE}');var d=t||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',d);document.cookie='${THEME_COOKIE}='+d+';path=/;max-age=31536000;SameSite=Lax';}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;
}
