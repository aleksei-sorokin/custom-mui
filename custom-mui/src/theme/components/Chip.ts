import { colors } from '../colorsLight';

export const MuiChip = {
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
};
