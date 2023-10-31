import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiOutlinedInput: Components<typeof defaultTheme>['MuiOutlinedInput'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      border: '1px solid #ECEBEB',
      borderRadius: '3px',
      backgroundColor: 'var(--white)',
      color: 'var(--primary-main)',
      padding: 0,
      fontFamily: 'DM Sans',
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      '& fieldset': {
        display: 'none'
      },
      '& > input': {
        padding: '0 !important'
      },
      '&.Mui-focused': {
        borderColor: 'var(--secondary-main)'
      },
      '&.Mui-error': {
        borderColor: 'var(--danger-main)',
        color: 'var(--danger-main)'
      }
    }
  }
};
