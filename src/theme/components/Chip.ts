import { colors } from '../colorsLight';
import { grey } from '@mui/material/colors';

export const MuiChip = {
  styleOverrides: {
    root: {
      fontSize: '0.75rem',
      lineHeight: '138%',
      letterSpacing: '0.4px',
      
    },
    filled: {
      '&.MuiChip-filled.MuiChip-colorDefault': {
        color: '#fff',
        backgroundColor: grey[500],
      },
      '&.MuiChip-filled.MuiChip-colorInfo': {
        color: '#1991FF',
        backgroundColor: colors.primary.outlinedHoverBackground,
      },
      '&.MuiChip-filled.MuiChip-colorPrimary': {
        color: '#fff',
        backgroundColor: '#1DA1F7',
      },
      '&.MuiChip-filled.MuiChip-colorSuccess': {
        color: colors.text.secondary,
        backgroundColor: grey['A100'],
      },
    },
    sizeMedium: {
      padding: '7px 10px',
    },
    iconMedium: {
      fontSize: 24,
    },
    iconSmall: {
      fontSize: 16,
    },
    avatarMedium: {
      fontSize: 24,
    },
    avatarSmall: {
      fontSize: 18,
    },
  },
};
