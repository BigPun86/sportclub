export const theme = {
  colors: {
    primary: "#d9245f", // rötlich
    primaryDark: "#b81d51",
    primaryLight: "#ff4b82",
    secondary: "#1696ff", // blau
    secondaryDark: "#0e6ec0",
    secondaryLight: "#5ab8ff",
    text: "#222",
    textMuted: "#666",
    bg: "#fff",
    bgMuted: "#f8f9fa",
    border: "#e9ecef",
  },
};

export type AppTheme = typeof theme;

// Club identity, taken from sckw.de (navy / red / blue, Barlow)
export const brand = {
  navy: "#10223f",
  navyDeep: "#0a1830",
  navySoft: "#1b3358",
  red: "#cd004e",
  redDark: "#a8003f",
  blue: "#0864c8",
  blueLight: "#9cc8ff",
  paper: "#f4f7fc",
  line: "#dce4ef",
  ink: "#10223f",
  muted: "#586c86",
  fontDisplay: '"Barlow Condensed", "Arial Narrow", Arial, sans-serif',
  fontBody: 'Barlow, Arial, Helvetica, sans-serif',
};
