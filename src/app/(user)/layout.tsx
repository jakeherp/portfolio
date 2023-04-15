import LayoutClient from './layout-client';

import '@styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

const basierCircle = localFont({
	src: [
		{
			path: '../../../public/fonts/basiercircle-regular-webfont.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/basiercircle-regularitalic-webfont.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../../../public/fonts/basiercircle-bold-webfont.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/basiercircle-bolditalic-webfont.woff2',
			weight: '700',
			style: 'italic',
		},
	],
	variable: '--font-basier-circle',
});

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon_dark.svg"
				/>
			</head>
			<body className={`${basierCircle.variable}`}>
				<LayoutClient>{children}</LayoutClient>
				<Analytics />
			</body>
		</html>
	);
}
