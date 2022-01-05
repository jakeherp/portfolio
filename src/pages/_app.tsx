import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { client } from 'apollo-client';
import { ThemeProvider } from 'next-themes';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default MyApp;
