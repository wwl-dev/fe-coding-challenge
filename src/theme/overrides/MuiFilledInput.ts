import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiFilledInput: Components<typeof defaultTheme>['MuiFilledInput'] = {
  defaultProps: {
    disableUnderline: true,
    hiddenLabel: true
  },
  styleOverrides: {
    root: {
      border: '1px solid #ECEBEB',
      borderRadius: '3px',
      backgroundColor: 'var(--warm-grey)',
      color: 'var(--primary-main)',
      padding: 0,
      fontFamily: 'DM Sans',
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      '& input': {
        padding: 0
      },
      '&:hover': {
        backgroundColor: 'var(--mauve)'
      },
      '&.Mui-focused': {
        backgroundColor: 'var(--mauve)'
      },
      '&.Mui-error': {
        color: 'var(--danger-main)'
      }
    }
  }
};
