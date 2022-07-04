import { colors } from '../colorsLight';
import { typography } from '../typography';

export const MuiTablePagination = {
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
};
