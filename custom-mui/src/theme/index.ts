import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { colors } from './colorsLight';
import { ThemeOptions } from '@mui/material';

const theme: ThemeOptions = createTheme({
  palette: { ...colors },
  typography: { ...typography },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '6px',
          minWidth: 'unset',
        },
        sizeLarge: {
          ...typography.buttonLarge,
        },
        sizeMedium: {
          ...typography.buttonMedium,
        },
        sizeSmall: {
          ...typography.buttonSmall,
        },
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
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 20,
          borderRadius: '6px',
          boxShadow: '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'initial',
          borderSpacing: '0px 4px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: 'transparent',
          tr: {
            boxShadow: 'none',
          },
          th: {
            border: 'none',
            background: 'none',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          padding: '9.5px 20px',
          color: colors.text.secondary,
          ...typography.body2,
          '&:first-of-type': {
            borderRadius: '6px 0 0 6px',
          },
          '&:last-child': {
            borderRadius: '0 6px 6px 0',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          padding: '0',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          ...typography.caption,
        },
        selectLabel: {
          ...typography.caption,
        },
        displayedRows: {
          ...typography.caption,
        },
        actions: {
          fontSize: 24,
          '.MuiSvgIcon-fontSizeMedium': {
            fontSize: '24px',
          },
          '.MuiButtonBase-root': {
            '.MuiSvgIcon-root': {
              fill: colors.action.active,
            },
          },
          '.Mui-disabled': {
            '.MuiSvgIcon-root': {
              fill: colors.action.disabled,
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          '&.MuiIconButton-colorPrimary': {
            backgroundColor: '#F6F8FB',
            color: colors.action.active,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '0.75rem',
          lineHeight: '138%',
          letterSpacing: '0.4px',
          '&.MuiChip-colorDefault': {
            color: '#fff',
            backgroundColor: '#9E9E9E',
          },
          '&.MuiChip-colorInfo': {
            color: '#1991FF',
            backgroundColor: colors.primary.outlinedHoverBackground,
          },
          '&.MuiChip-colorPrimary': {
            color: '#fff',
            backgroundColor: '#1DA1F7',
          },
          '&.MuiChip-colorSuccess': {
            color: colors.text.secondary,
            backgroundColor: '#F5F5F5',
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
    },
  },
});

export default theme;