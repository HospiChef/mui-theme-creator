import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        teal: Palette['primary'];
        darkBlue: Palette['primary'];
        blueGrey: Palette['primary'];
        mint: Palette['primary'];
        merino: Palette['primary'];
        porcelain: Palette['primary'];
        red: Palette['primary'];
        cyan: Palette['primary'];
    }

    interface PaletteOptions {
        teal?: PaletteOptions['primary'];
        darkBlue?: PaletteOptions['primary'];
        blueGrey?: PaletteOptions['primary'];
        mint?: PaletteOptions['primary'];
        merino?: PaletteOptions['primary'];
        porcelain?: PaletteOptions['primary'];
        red?: PaletteOptions['primary'];
        cyan?: PaletteOptions['primary'];
    }
}

// TODO: Declare color props for components to use them directly in the props
// declare module '@mui/material/Button' {
//     interface ButtonPropsColorOverrides {
//         teal: true;
//     }
// }