import { NavigationItem } from '../NavigationItem';
import { render } from '@testing-library/react';

jest.mock('next/router', () => ({
	useRouter: jest.fn().mockReturnValue({
		asPath: '/some-path',
	}),
}));

jest.mock('next/link', () => {
	const React = require('react');
	return ({ children, href }: React.PropsWithChildren<{ href: string }>) =>
		React.cloneElement(React.Children.only(children), { href });
});

describe('NavigationItem', () => {
	it('renders correctly', () => {
		const { container } = render(
			<NavigationItem href="/" title="Navigation Link" />
		);
		expect(container).toMatchSnapshot();
	});
});
