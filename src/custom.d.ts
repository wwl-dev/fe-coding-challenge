import type { Theme } from '@mui/material';

declare global {
  interface Window {
    theme: Theme;
  }
}

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}
