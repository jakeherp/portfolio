import type { AppProps } from 'next/app';
import { GlobalStyles } from 'Styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { lightTheme, darkTheme } from 'Styles/themes';
import { storeWrapper } from 'Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from 'Redux/selectors';
import { setTheme } from 'Redux/actions/theme';

function MyApp({ Component, pageProps }: AppProps) {
	const theme = useSelector(getTheme);
	const dispatch = useDispatch();

	const handleEventListener = (e: MediaQueryListEvent) =>
		e.matches ? dispatch(setTheme('dark')) : dispatch(setTheme('light'));

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			dispatch(setTheme('dark'));
		}

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', handleEventListener);

		return () =>
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', handleEventListener);
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

export default storeWrapper.withRedux(MyApp);
