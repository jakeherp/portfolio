import type { AppProps } from 'next/app';
import { getTheme } from 'Redux/selectors';
import { GlobalStyles } from 'Styles/globalStyles';
import { Layout } from 'Templates/Layout';
import NProgress from 'nprogress';
import Router from 'next/router';
import { setTheme } from 'Redux/actions/theme';
import { storeWrapper } from 'Redux/store';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { darkTheme, lightTheme } from 'Styles/themes';
import { useDispatch, useSelector } from 'react-redux';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<GlobalStyles />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default storeWrapper.withRedux(MyApp);
