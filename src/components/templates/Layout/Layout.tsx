import { useTheme } from 'next-themes';
import { FC, ReactNode, useEffect } from 'react';

import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { SkipToContent } from '@/components/atoms/SkipToContent';

interface LayoutProps {
	children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const favicon = document.querySelector("link[rel~='icon']") as any;
		if (favicon) favicon.href = `/assets/favicon_${resolvedTheme}.svg`;
	}, [resolvedTheme]);

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<SkipToContent />
			<Header />
			<main id="content">{children}</main>
			<Footer />
		</div>
	);
};
