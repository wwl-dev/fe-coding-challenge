import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiMenuItem: Components<typeof defaultTheme>['MuiMenuItem'] = {
  styleOverrides: {
    root: {
      color: '#545454',
      fontSize: '14px',
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
      '&:hover, &:active': {
        backgroundColor: 'var(--secondary-dark) !important',
        color: `var(--violet)`
      },
      '& .MuiSvgIcon-root': {
        width: '16px',
        height: '16px',
        marginRight: '6px'
      }
    }
  }
};
