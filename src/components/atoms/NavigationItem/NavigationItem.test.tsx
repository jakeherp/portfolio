import { NavigationItem } from '../NavigationItem';
import { render } from '@testing-library/react';

jest.mock('next/router', () => ({
	useRouter: jest.fn().mockReturnValue({
		asPath: '/some-path',
	}),
}));

describe('NavigationItem', () => {
	it('renders correctly', () => {
		const { container } = render(
			<NavigationItem href="/" title="Navigation Link" />
		);
		expect(container).toMatchSnapshot();
	});
});
