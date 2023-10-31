import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiCheckbox: Components<typeof defaultTheme>['MuiCheckbox'] = {
  styleOverrides: {
    root: {
      color: `var(--secondary-main)`,
      '&:hover': {
        backgroundColor: 'transparent'
      },
      '&.Mui-checked': {
        color: `var(--secondary-main)`
      },
      '& input[type="checkbox"]': {
        width: '18px',
        height: '18px'
      },
      '& .MuiSvgIcon-root': {
        width: '18px',
        height: '18px'
      }
    }
  }
};
