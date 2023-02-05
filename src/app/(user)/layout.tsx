"use client";

import { SkipToContent } from '@/components/atoms/SkipToContent';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import '@/styles/globals.css';
import { useTheme } from 'next-themes';
import { PropsWithChildren, useEffect } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const favicon = document.querySelector("link[rel~='icon']") as any;
		if (favicon) favicon.href = `/assets/favicon_${resolvedTheme}.svg`;
	}, [resolvedTheme]);

	return (
		<html lang="en">
			<head />
			<body>
				<SkipToContent />
				<Header />
				<main id="content">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
