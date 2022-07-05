import { colors } from '../colorsLight';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

export const MuiTextField: OverridesStyleRules = {
  styleOverrides: {
    root: {
      '.Mui-disabled': {
        '&.MuiFilledInput-root': {
					backgroundColor: 'rgba(0, 0, 0, 0.09)'
        },
      },
    },
  },
};
