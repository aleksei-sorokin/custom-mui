import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material';
declare module '@mui/material/styles/createPalette' {
    interface Palette {
        other?: Palette['primary'];
    }
}
declare module '@mui/material/styles' {
    interface SimplePaletteColorOptions {
        containedHoverBackground?: string;
        outlinedHoverBackground?: string;
        outlinedRestingBackground?: string;
        content?: string;
        background?: string;
        divider?: string;
        outlineBorder?: string;
        standardInputLine?: string;
        dackdropOverlay?: string;
        ratingActive?: string;
        snackbarBg?: string;
    }
    interface PaletteColor {
        containedHoverBackground?: string;
        outlinedHoverBackground?: string;
        outlinedRestingBackground?: string;
        content?: string;
        background?: string;
        divider?: string;
        outlineBorder?: string;
        standardInputLine?: string;
        dackdropOverlay?: string;
        ratingActive?: string;
        snackbarBg?: string;
    }
}
interface DefaultPaletteOptions extends PaletteOptions {
    primary?: SimplePaletteColorOptions;
}
export declare const colors: DefaultPaletteOptions;
export {};
