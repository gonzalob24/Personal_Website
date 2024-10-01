import { createTheme, responsiveFontSizes } from '@mui/material';
import { purple, blue } from '@mui/material/colors';

// export const roboto = Roboto({
// 	weight: ['300', '400', '500', '700'],
// 	subsets: ['latin'],
// 	display: 'swap',
// 	fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
const theme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'dark',
			primary: blue,
			secondary: purple,
			error: {
				main: '#ff6358',
			},
		},
		// typography: {
		// 	fontFamily: roboto.style.fontFamily,
		// },
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 960,
				lg: 1280,
				xl: 1920,
			},
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `
          html {
            scroll-behavior: smooth;
          }
        `,
			},
		},
	})
);

export default theme;
