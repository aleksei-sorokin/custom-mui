import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { colors } from '../colorsLight';
import { typography } from '../typography';

export const MuiTab: OverridesStyleRules = {
  styleOverrides: {
    root: {
      textTransform: 'unset',
      ...typography.buttonMedium,
      color: colors.text.secondary,
      paddingLeft: 0,
      paddingRight: 0,
      minWidth: 'unset',
      minHeight: 'unset',
      marginRight: '42px',

      '&.Mui-selected': {
        color: colors.text.primary,

        // svg: {
        //   path: {
        //     fill: colors.primary,
        //   },
        // },
      },
    },
  },
};
