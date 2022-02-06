import { useTheme } from 'next-themes';
import { FC, useEffect } from 'react';

import { Footer } from 'Organisms/Footer';
import { Header } from 'Organisms/Header';

export const Layout: FC = ({ children }) => {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const favicon = document.querySelector("link[rel~='icon']") as any;
		if (favicon) favicon.href = `/assets/favicon_${resolvedTheme}.svg`;
	}, [resolvedTheme]);

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
