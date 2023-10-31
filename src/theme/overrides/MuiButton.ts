import type { Components } from '@mui/material';
import type { defaultTheme } from '@theme/theme';

export const MuiButton: Components<typeof defaultTheme>['MuiButton'] = {
  defaultProps: {
    disableElevation: true
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      textTransform: 'none',
      borderRadius: '3px',
      fontFamily: 'DM Sans',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 'normal',
      fontSize: '13px',
      padding: ownerState.size === 'small' ? '5px 14px' : ownerState.size === 'large' ? '12px 14px' : '7px 14px',
      cursor: 'pointer'
    }),
    contained: () => ({
      border: '1px solid var(--primary-main)',
      color: 'var(--primary-contrast-text)',
      backgroundColor: 'var(--primary-main)',
      '&:hover': {
        border: '1px solid var(--orchid)',
        backgroundColor: 'var(--orchid)',
        color: 'var(--orchid-contrast-text)'
      },
      '& .MuiSvgIcon-root': {
        color: 'var(--primary-contrast-text)'
      },
      '&:hover .MuiSvgIcon-root': {
        color: 'var(--orchid-contrast-text)'
      },
      '&:disabled': {
        border: '1px solid var(--warn-grey)'
      }
    }),
    containedSecondary: {
      border: '1px solid var(--secondary-main)',
      color: 'var(--secondary-contrast-text)',
      backgroundColor: 'var(--secondary-main)',
      '&:hover': {
        border: '1px solid var(--orchid)',
        backgroundColor: 'var(--orchid)',
        color: 'var(--orchid-contrast-text)'
      },
      '& .MuiSvgIcon-root': {
        color: 'var(--secondary-contrast-text)'
      },
      '&:hover .MuiSvgIcon-root': {
        color: 'var(--orchid-contrast-text)'
      },
      '&:disabled': {
        border: '1px solid var(--warn-grey)'
      }
    },
    text: {
      border: 'none',
      color: 'var(--primary-main)',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
        color: 'var(--primary-main)',
        textDecoration: 'underline'
      },
      '& .MuiSvgIcon-root': {
        color: 'var(--primary-main)'
      },
      '&:hover .MuiSvgIcon-root': {
        color: 'var(--orchid-contrast-text)'
      }
    },
    textSecondary: {
      border: 'none',
      color: 'var(--secondary-main)',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
        color: 'var(--secondary-main)',
        textDecoration: 'underline'
      },
      '& .MuiSvgIcon-root': {
        color: 'var(--secondary-main)'
      },
      '&:hover .MuiSvgIcon-root': {
        color: 'var(--secondary-main)'
      }
    },
    outlined: () => ({
      border: `1px solid var(--secondary-main)`,
      color: 'var(--secondary-main)',
      '&:hover': {
        border: `1px solid var(--secondary-main)`,
        backgroundColor: 'var(--secondary-main)',
        color: 'var(--secondary-contrast-text)'
      },
      '& .MuiSvgIcon-root': {
        color: 'var(--secondary-main)'
      },
      '&:hover .MuiSvgIcon-root': {
        color: 'var(--secondary-contrast-text)'
      },
      '&:disabled': {
        border: '1px solid var(--warn-grey)'
      }
    })
  }
};
