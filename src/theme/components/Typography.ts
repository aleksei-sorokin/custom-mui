import { OverridesStyleRules } from '@mui/material/styles/overrides';

export const MuiTypography: OverridesStyleRules = {
  styleOverrides: {
    root: {
      '&.MuiTypography-body1': {
        whiteSpace: 'pre-wrap',
      },
      '&.MuiTypography-body2': {
        whiteSpace: 'pre-wrap',
      },
    },
  },
};
