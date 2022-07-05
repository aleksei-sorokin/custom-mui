import { typography } from '../typography';
import { colors } from './../colorsLight';
export const MuiTableHead = {
	styleOverrides: {
		root: {
			background: 'transparent',
			tr: {
				boxShadow: 'none',
			},
			th: {
				border: 'none',
				background: 'none',
				color: colors.action.active,
				...typography.subtitle2
			},
		},
	},
};
