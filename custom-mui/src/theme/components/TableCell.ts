import { colors } from '../colorsLight';
import { typography } from '../typography';

export const MuiTableCell = {
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
};
