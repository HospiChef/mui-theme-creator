import { createTheme, alpha, responsiveFontSizes, darken } from '@mui/material/styles';
import * as colors from './colors';

let theme = createTheme({
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
      superlight: colors.teal[50],
    },
    secondary: {
      main: colors.darkBlue[900],
      light: colors.darkBlue[600],
      dark: colors.darkBlue[900],
      contrastText: colors.porcelain[50],
      superlight: colors.darkBlue[200],
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
    h5: {
      fontWeight: 500,
      fontSize: '16px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '16px',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '18px',
    },
    subtitle2: {
      fontSize: '14px',
    },
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
    },
    button: {
      letterSpacing: '0.16px',
    },
  },
  shape: {
    borderRadius: 10,
  },
}
);

theme = createTheme(theme, {
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
    MuiAppBar: {
      defaultProps: {
        color: "default"
      }
    },
    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          sx: {
            backgroundColor: colors.blueGrey[900],
            color: darken(theme.palette.primary.contrastText, 0.1),
            '& .MuiListItemIcon-root': {
              color: 'inherit',
            },
            '& .MuiListItemText-primary': {
              color: 'inherit',
            },
            '& .Mui-selected, & .Mui-selected:hover': {
              backgroundColor: alpha('#000', 0.16),
              color: theme.palette.primary.light,
            },
          }
        }
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        }
      },
      defaultProps: {
        color: "inherit",
        sx: { typography: 'subtitle2', }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          '& .MuiIcon-root': {
            fontSize: theme.typography.body1.fontSize,
          },
          '& .MuiSvgIcon-root': {
            fontSize: theme.typography.body1.fontSize,
          },
          minWidth: '32px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          minWidth: '90px',
        },
      }
    },
    MuiSelect: {
      defaultProps: {
        autoWidth: true
      }
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
      },
    }
  }
})

theme = responsiveFontSizes(theme);

export default theme;
