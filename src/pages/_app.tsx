import { AnimatePresence } from 'framer-motion';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { client } from 'apollo-client';
import { ThemeProvider } from 'next-themes';

import '../styles/index.css';
import { Layout } from 'Templates/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider attribute="class">
				<Layout>
					<AnimatePresence
						exitBeforeEnter
						initial={false}
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<Component {...pageProps} />
					</AnimatePresence>
				</Layout>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default MyApp;
