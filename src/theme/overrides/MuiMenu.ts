import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiMenu: Components<typeof defaultTheme>['MuiMenu'] = {
  defaultProps: {
    slotProps: {
      paper: {
        elevation: 0
      }
    }
  },
  styleOverrides: {
    paper: {
      marginTop: '2px',
      border: `1px solid var(--secondary-dark)`,
      borderRadius: '3px',
      boxShadow: `0px 2px 5px 0px rgba(0, 0, 0, 0.10)`,
      backgroundColor: '#FDFCFF'
    }
  }
};
