declare module "*.png" {
  const value: any;
  export = value;
}
declare module '*.webp' {
  const value: any;
  export = value;
}

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    // define additional palettes here
  }

  interface PaletteOptions {
    // define additional paletteOptions here
  }
}

// Declare color props for components to use them directly in the props
// declare module '@mui/material/Button' {
//     interface ButtonPropsColorOverrides {
//         teal: true;
//     }
// }

declare module '@mui/material/styles' {
  interface PaletteColor {
    superlight?: string;
  }

  interface SimplePaletteColorOptions {
    superlight?: string;
  }
}