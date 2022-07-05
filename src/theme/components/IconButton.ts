import { colors } from '../colorsLight';
export const MuiIconButton = {
	styleOverrides: {
		root: {
			borderRadius: '6px',
			'&.MuiIconButton-colorPrimary': {
				backgroundColor: colors.background.default,
				color: colors.action.active,
			},
		},
	},
};
