import { styled } from '@mui/material/styles';

import Link from '@mui/material/Link';

const CustomLink = styled(Link)(() => ({
	padding: '0px 15px',
	textDecoration: 'none',
	position: 'relative',
	'&::before': {
		content: '""',
		position: 'absolute',
		width: 0,
		height: '3px',
		bottom: 0,
		left: 0,
		backgroundColor: '#9c27b0',
		visibility: 'hidden',
		transition: 'all 0.3s ease-in-out',
	},
	'&:hover::before': {
		visibility: 'visible',
		width: '100%',
	},
}));

export default CustomLink;
