import type { AppProps } from 'next/app';
import { GlobalStyles } from 'Styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from 'Styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		}

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => {
				e.matches ? setTheme('dark') : setTheme('light');
			});
	}, []);

	return (
		<>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
