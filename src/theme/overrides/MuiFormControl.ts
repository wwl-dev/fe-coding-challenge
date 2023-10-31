import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiFormControl: Components<typeof defaultTheme>['MuiFormControl'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '& label': {
        position: 'relative',
        color: '#545454',
        marginBottom: '8px',
        fontFamily: 'DM Sans',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        transform: 'none'
      }
    }
  }
};
