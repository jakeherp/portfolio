import LayoutClient from './layout-client';

import '@styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { PropsWithChildren } from 'react';

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
			<body>
				<LayoutClient>{children}</LayoutClient>
				<Analytics />
			</body>
		</html>
	);
}
