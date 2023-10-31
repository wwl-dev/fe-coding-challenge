import { createTheme } from '@mui/material/styles';

import { colors, cssColorVars } from './colors';
import {
  MuiButton,
  MuiCheckbox,
  MuiChip,
  MuiFilledInput,
  MuiFormControl,
  MuiFormHelperText,
  MuiMenu,
  MuiMenuItem,
  MuiOutlinedInput,
  MuiSelect,
  MuiSwitch,
  MuiTextField
} from './overrides';
import { typography } from './typography';

export const defaultTheme = createTheme({
  typography,
  palette: { ...colors },
  shape: {
    borderRadius: 4
  },
  spacing: 8,
  transitions: {
    duration: {
      enteringScreen: 300,
      leavingScreen: 300
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true // disable ripple effect globally
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          ...cssColorVars
        }
      }
    },
    MuiButton,
    MuiChip,
    MuiFilledInput,
    MuiOutlinedInput,
    MuiTextField,
    MuiFormControl,
    MuiSelect,
    MuiFormHelperText,
    MuiSwitch,
    MuiMenu,
    MuiMenuItem,
    MuiCheckbox
  }
});
