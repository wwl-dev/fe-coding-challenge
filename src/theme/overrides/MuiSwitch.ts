import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiSwitch: Components<typeof defaultTheme>['MuiSwitch'] = {
  styleOverrides: {
    colorPrimary: {
      '&.Mui-checked': {
        color: 'var(--grape)'
      }
    },
    track: {
      '.Mui-checked.Mui-checked + &': {
        backgroundColor: 'var(--grape)'
      }
    }
  }
};
