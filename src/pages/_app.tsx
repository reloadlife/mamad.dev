import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green, purple, red } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: '#4527a0',
		},
		secondary: {
			main: '#304ffe',
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
