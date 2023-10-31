import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiFormHelperText: Components<typeof defaultTheme>['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      marginLeft: 0
    },
    filled: {
      '&.Mui-error': {
        color: 'var(--danger-main)'
      }
    }
  }
};
