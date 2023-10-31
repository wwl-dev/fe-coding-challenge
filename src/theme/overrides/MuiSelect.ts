import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiSelect: Components<typeof defaultTheme>['MuiSelect'] = {
  defaultProps: {},
  styleOverrides: {
    outlined: {
      padding: 0
    }
  }
};
