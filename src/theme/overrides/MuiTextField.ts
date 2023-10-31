import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiTextField: Components<typeof defaultTheme>['MuiTextField'] = {
  defaultProps: {
    InputLabelProps: {
      shrink: false
    }
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      '& .MuiInputBase-root': {
        padding: ownerState.size === 'small' ? '6px 14px' : '12px 14px'
      },
      '& label': {
        position: 'relative',
        color: '#545454',
        marginBottom: '6px',
        fontFamily: 'DM Sans',
        fontSize: ownerState.size === 'small' ? '12px' : '15px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        transform: 'none'
      }
    })
  }
};
