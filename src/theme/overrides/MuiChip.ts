import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiChip: Components<typeof defaultTheme>['MuiChip'] = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      fontSize: '1rem'
    }
  }
};
