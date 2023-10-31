import { createTheme } from '@mui/material';

const theme = createTheme();
const fontFamily = ['"DM Sans"', 'sans-serif'].join(',');

export const typography = {
  fontFamily,
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  fontWeightLightAlt: 300,
  fontWeightNormalAlt: 400,
  fontWeightMediumAlt: 500,
  fontWeightBoldAlt: 600,
  h1: {
    fontFamily,
    fontWeight: 600,
    fontSize: '6.25rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.33rem'
    }
  },
  h2: {
    fontFamily,
    fontWeight: 600,
    fontSize: '28px'
  },
  h3: {
    fontFamily,
    fontWeight: 500,
    fontSize: '4.17rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem'
    }
  },
  h4: {
    fontFamily,
    fontWeight: 400,
    fontSize: '3.33rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem'
    }
  },
  h5: {
    fontFamily,
    fontWeight: 500,
    fontSize: '3.67rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  },
  h6: {
    fontFamily,
    fontWeight: 400,
    fontSize: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.83rem'
    }
  },
  h7: {
    fontFamily,
    fontWeight: 500,
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.67rem'
    }
  },
  subheader1: {
    fontFamily,
    fontWeight: 400,
    fontSize: '2.83rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.33rem'
    }
  },
  subheader2: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1.83rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.67rem'
    }
  },
  subheader3: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.33rem'
    }
  },
  subheader4: {
    fontFamily,
    fontWeight: 400,
    fontSize: '1.33rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.17rem'
    }
  },
  subheader5: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1.17rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  body1: { fontFamily, fontSize: '1.17rem' },
  body2: { fontFamily, fontSize: '1rem' },
  body3: { fontFamily, fontSize: '.83rem' },
  tag: { fontFamily, fontWeight: 500, fontSize: '1rem' },
  navlink: { fontFamily, fontWeight: 500, fontSize: '1.08rem' },
  detail: { fontFamily, fontWeight: 500, fontSize: '1rem' },
  caption: { fontFamily, fontWeight: 500, fontSize: '.83rem' },
  subtitle1: { fontFamily },
  subtitle2: { fontFamily },
  button: { fontFamily },
  overline: { fontFamily }
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h7: React.CSSProperties;
    subheader1: React.CSSProperties;
    subheader2: React.CSSProperties;
    subheader3: React.CSSProperties;
    subheader4: React.CSSProperties;
    subheader5: React.CSSProperties;
    body3: React.CSSProperties;
    tag: React.CSSProperties;
    navlink: React.CSSProperties;
    detail: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    subheader1?: React.CSSProperties;
    subheader2?: React.CSSProperties;
    subheader3?: React.CSSProperties;
    subheader4?: React.CSSProperties;
    subheader5?: React.CSSProperties;
    body3?: React.CSSProperties;
    tag?: React.CSSProperties;
    navlink?: React.CSSProperties;
    detail?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    subheader1: true;
    subheader2: true;
    subheader3: true;
    subheader4: true;
    subheader5: true;
    body3: true;
    tag: true;
    navlink: true;
    detail: true;
  }
}
