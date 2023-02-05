import { NavigationItem } from '../NavigationItem';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: jest.fn().mockReturnValue({
		route: '',
		pathname: '',
		query: '',
		asPath: '',
	}),
}));

jest.mock('next/link', () => {
	const React = require('react');
	return ({ children, href }: React.PropsWithChildren<{ href: string }>) =>
		React.cloneElement(React.Children.only(children), { href });
});

describe('NavigationItem', () => {
	(useRouter as jest.Mock).mockReturnValue({
		asPath: '',
	});

	it('renders correctly', () => {
		const { container } = render(
			<NavigationItem
				href="/"
				title="Navigation Link"
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: (custom: number) => ({
						opacity: 1,
						x: 0,
						transition: { delay: custom },
					}),
				}}
				initial="initial"
				animate="animate"
				customDelay={0}
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
