import type { ReactNode } from 'react';

import { Fade } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { SnackbarProvider } from 'notistack';

function Snackbar({ children }: { children: ReactNode }) {
  const classes = useStyles();

  return (
    <SnackbarProvider
      maxSnack={4}
      TransitionComponent={Fade}
      className="global-snackbar"
      classes={{
        containerRoot: classes.containerRoot,
        root: classes.snackbarRoot,
        variantSuccess: classes.success,
        variantWarning: classes.warning,
        variantError: classes.error,
        variantInfo: classes.info
      }}
    >
      {children}
    </SnackbarProvider>
  );
}

export default Snackbar;

const useStyles = makeStyles((theme) => ({
  containerRoot: {
    height: 'auto'
  },
  snackbarRoot: {
    pointerEvents: 'auto',
    marginBottom: theme.spacing(1),
    '& .SnackbarContent-root': {
      borderRadius: 30,
      fontSize: '1rem',
      fontWeight: theme.typography.fontWeightMedium,
      minWidth: 100,
      boxShadow: 'none'
    },
    '& .SnackbarItem-message': {
      padding: 0
    },
    '& .SnackbarItem-action': {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  },
  success: {
    backgroundColor: theme.palette.success.dark
  },
  warning: {
    backgroundColor: theme.palette.warning.dark
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.info.dark
  }
}));
