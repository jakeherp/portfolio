'use client';

import { SkipToContent } from '@components/atoms/SkipToContent';
import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';

import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

export default function LayoutClient({ children }: PropsWithChildren) {
	return (
		<ThemeProvider attribute="class">
			<SkipToContent />
			<Header />
			<main id="content">{children}</main>
			<Footer />
		</ThemeProvider>
	);
}
