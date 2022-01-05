import { useTheme } from 'next-themes';
import { FC, useEffect } from 'react';

import { Footer } from 'Organisms/Footer';
import { Header } from 'Organisms/Header';
import { SeoHead } from 'Atoms/SeoHead';

export type Props = {
	title: string;
	description: string;
	keywords?: string[];
	meta?: Array<{
		name: string;
		content: string;
	}>;
};

export const Layout: FC<Props> = ({
	children,
	title = 'Jacob Herper - Software Engineer',
	description,
	keywords,
	meta,
}) => {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const favicon = document.querySelector("link[rel~='icon']") as any;
		if (favicon) favicon.href = `/assets/favicon_${resolvedTheme}.svg`;
	}, [resolvedTheme]);

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<SeoHead
				title={title}
				description={description}
				meta={meta}
				keywords={keywords}
			/>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
