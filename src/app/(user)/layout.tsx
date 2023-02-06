'use client';

import { SkipToContent } from '@components/atoms/SkipToContent';
import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';

import '@styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head />
			<body>
				<ThemeProvider attribute="class">
					<SkipToContent />
					<Header />
					<main id="content">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
