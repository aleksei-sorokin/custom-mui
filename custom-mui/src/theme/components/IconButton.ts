import { colors } from '../colorsLight';
export const MuiIconButton = {
	styleOverrides: {
		root: {
			borderRadius: '6px',
			'&.MuiIconButton-colorPrimary': {
				backgroundColor: '#F6F8FB',
				color: colors.action.active,
			},
		},
	},
};
