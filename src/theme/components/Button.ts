import { typography } from '../typography';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

export const MuiButton:OverridesStyleRules = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      borderRadius: '6px',
      minWidth: 'unset',
    },
    sizeLarge: typography.buttonLarge,
    sizeMedium: typography.buttonMedium,
    sizeSmall: typography.buttonSmall,
    contained: {
      sizeLarge: {
        padding: '8px 22px',
      },

      sizeMedium: {
        padding: '6px 16px',
      },
      sizeSmall: {
        padding: '4px 10px',
      },
    },
    outlined: {
      sizeLarge: {
        padding: '8px 20px',
      },

      sizeMedium: {
        padding: '6px 14px',
      },
      sizeSmall: {
        padding: '4px 8px',
      },
    },
    text: {
      sizeLarge: {
        padding: '8px 11px',
      },

      sizeMedium: {
        padding: '6px 8px',
      },
      sizeSmall: {
        padding: '4px 5px',
      },
    },
    iconSizeLarge: 24,
    iconSizeMedium: 20,
    iconSizeSmall: 18,
  },
};
