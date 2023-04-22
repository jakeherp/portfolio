import { NavigationItem } from '../NavigationItem';

import { render } from '@testing-library/react';
import React from 'react';

jest.mock('next/navigation', () => ({
	__esModule: true,
	usePathname: jest.fn().mockReturnValue('/'),
}));

describe('NavigationItem', () => {
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
