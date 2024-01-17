import { createTheme, alpha } from '@mui/material/styles';
import * as colors from './colors';

const theme = createTheme({
  palette: {
    text: {
      primary: colors.darkBlue[900],
      secondary: colors.porcelain[900],
      disabled: alpha(colors.porcelain[900], 0.40),
    },
    primary: {
      main: colors.teal[500],
      light: colors.teal[200],
      dark: colors.teal[800],
    },
    secondary: {
      main: colors.darkBlue[900],
      light: colors.darkBlue[600],
      dark: colors.darkBlue[900],
      contrastText: colors.porcelain[50],
    },
    error: {
      main: colors.red[400],
    },
    warning: {
      main: colors.amber[700],
    },
    info: {
      main: colors.cyan[500],
      light: colors.cyan[400],
    },
    success: {
      main: colors.mint[800],
    },
    background: {
      default: colors.porcelain[50],
    },
  },
  typography: {
    fontFamily: 'DM Sans',
    fontSize: 16,
    h1: {
      fontWeight: 700,
      fontSize: '36px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '24px',
    },
    h3: {
      fontWeight: 500,
      fontSize: '20px',
    },
    h4: {
      fontWeight: 500,
      fontSize: '18px',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '18px',
    },
    subtitle2: {
      fontSize: '16px',
    },
    body1: {},
    body2: {
      fontSize: '14px',
    },
    button: {
      letterSpacing: '0.16px',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        standard: {
          borderWidth: '1.6px',
          borderStyle: 'solid',
        },
        standardError: {
          borderColor: colors.red[400],
        },
        standardWarning: {
          borderColor: colors.amber[700],
        },
        standardInfo: {
          borderColor: colors.cyan[500],
        },
        standardSuccess: {
          borderColor: colors.mint[800],
        },
        outlined: {
          borderWidth: '1.6px',
        },
      },
    },
  },
}
);

export default theme;
