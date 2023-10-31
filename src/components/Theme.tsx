import type { ReactNode } from 'react';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { StylesProvider, createGenerateClassName } from '@mui/styles';

import { defaultTheme } from '@theme/theme';

export const Theme = ({ children }: { children: ReactNode }) => {
  window.theme = defaultTheme;

  const generateClassName = createGenerateClassName({
    productionPrefix: 'app'
  });

  return (
    <StyledEngineProvider injectFirst>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </StylesProvider>
    </StyledEngineProvider>
  );
};

export default Theme;
