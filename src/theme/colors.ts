export const colors = {
  primary: {
    light: '#7848D8',
    main: '#28173F',
    contrastText: '#EDEDED'
  },
  secondary: {
    light: '#F7F4FE',
    main: '#7848D8',
    dark: '#E8DBFD',
    contrastText: '#FFFFFF'
  },
  success: {
    main: '#75BD26',
    contrastText: '#28173F'
  },
  danger: {
    main: '#E53935',
    contrastText: '#FFFFFF'
  },
  navLink: {
    main: '#28173F',
    footer: '#F5F4FC'
  },
  darkPurple: {
    main: '#28173F',
    light: '#61418C',
    contrastText: '#F7F4FE'
  },
  grape: {
    main: '#7848D8',
    contrastText: '#F7F4FE'
  },
  violet: {
    main: '#8D5CF2',
    contrastText: '#F9F9FD'
  },
  orchid: {
    main: '#BE99F9',
    contrastText: '#F5F4FC'
  },
  mauve: {
    main: '#E8DBFD',
    contrastText: '#28173F'
  },
  warmGrey: {
    main: '#F5F4FC',
    contrastText: '#28173F'
  },
  lime: {
    main: '#DCFDB8',
    contrastText: '#28173F'
  },
  coolGrey: {
    main: '#F9F9FD',
    contrastText: '#28173F'
  },
  white: {
    main: '#FFFFFF',
    contrastText: '#28173F'
  },
  accent: {
    main: '#F1BE38'
  }
};

declare module '@mui/material/styles' {
  // add color variant options
  interface Palette {
    navLink: Palette['primary'];
    darkPurple: Palette['primary'];
    grape: Palette['primary'];
    violet: Palette['primary'];
    orchid: Palette['primary'];
    mauve: Palette['primary'];
    warmGrey: Palette['primary'];
    lime: Palette['primary'];
    coolGrey: Palette['primary'];
    white: Palette['primary'];
    accent: Palette['primary'];
  }

  // allow configuration using theme
  interface PaletteOptions {
    navLink: PaletteOptions['primary'];
    darkPurple: PaletteOptions['primary'];
    grape: PaletteOptions['primary'];
    violet: PaletteOptions['primary'];
    orchid: PaletteOptions['primary'];
    mauve: PaletteOptions['primary'];
    warmGrey: PaletteOptions['primary'];
    lime: PaletteOptions['primary'];
    coolGrey: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    accent: PaletteOptions['primary'];
  }
}

export const cssColorVars = {
  '--primary-light': colors.primary.light,
  '--primary-main': colors.primary.main,
  '--primary-contrast-text': colors.primary.contrastText,
  '--secondary-light': colors.secondary.light,
  '--secondary-main': colors.secondary.main,
  '--secondary-dark': colors.secondary.dark,
  '--secondary-contrast-text': colors.secondary.contrastText,
  '--success-main': colors.success.main,
  '--success-contrast-text': colors.success.contrastText,
  '--danger-main': colors.danger.main,
  '--danger-contrast-text': colors.danger.contrastText,
  '--dark-purple': colors.darkPurple.main,
  '--dark-purple-contrast-text': colors.darkPurple.contrastText,
  '--grape': colors.grape.main,
  '--grape-contrast-text': colors.grape.contrastText,
  '--violet': colors.violet.main,
  '--violet-contrast-text': colors.violet.contrastText,
  '--orchid': colors.orchid.main,
  '--orchid-contrast-text': colors.orchid.contrastText,
  '--mauve': colors.mauve.main,
  '--mauve-contrast-text': colors.mauve.contrastText,
  '--warm-grey': colors.warmGrey.main,
  '--warm-grey-contrast-text': colors.warmGrey.contrastText,
  '--lime': colors.lime.main,
  '--lime-contrast-text': colors.lime.contrastText,
  '--cool-grey': colors.coolGrey.main,
  '--cool-grey-contrast-text': colors.coolGrey.contrastText,
  '--white': colors.white.main,
  '--white-contrast-text': colors.white.contrastText,
  '--accent': colors.accent.main
};

// update button's color options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    navLink: true;
    darkPurple: true;
    grape: true;
    violet: true;
    orchid: true;
    mauve: true;
    warmGrey: true;
    lime: true;
    coolGrey: true;
    white: true;
    accent: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    navLink: true;
    darkPurple: true;
    grape: true;
    violet: true;
    orchid: true;
    mauve: true;
    warmGrey: true;
    lime: true;
    coolGrey: true;
    white: true;
    accent: true;
  }
}

declare module '@mui/material/FilledInput' {
  interface FilledInputPropsColorOverrides {
    navLink: true;
    darkPurple: true;
    grape: true;
    violet: true;
    orchid: true;
    mauve: true;
    warmGrey: true;
    lime: true;
    coolGrey: true;
    white: true;
    accent: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    navLink: true;
    darkPurple: true;
    grape: true;
    violet: true;
    orchid: true;
    mauve: true;
    warmGrey: true;
    lime: true;
    coolGrey: true;
    white: true;
    accent: true;
  }
}

declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    navLink: true;
    darkPurple: true;
    grape: true;
    violet: true;
    orchid: true;
    mauve: true;
    warmGrey: true;
    lime: true;
    coolGrey: true;
    white: true;
    accent: true;
  }
}
