import LayoutClient from './layout-client';

import { Blob } from '@components/atoms/Blob';

import { personJsonLd, websiteJsonLd } from '@lib/config/jsonLd';
import { basierCircle } from '@lib/fonts';

import '@styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon.svg"
				/>
			</head>
			<body
				className={`${basierCircle.variable} bg-off-white dark:bg-slate-950`}
			>
				<div className="absolute w-full max-w-[1920px] my-auto overflow-hidden pointer-events-none md:-top-[90%]">
					<Blob />
				</div>
				<LayoutClient>{children}</LayoutClient>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
				<Analytics />
			</body>
		</html>
	);
}
