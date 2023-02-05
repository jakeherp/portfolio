import '@/styles/globals.css';
import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head />
			<body>{children}</body>
		</html>
	);
}
