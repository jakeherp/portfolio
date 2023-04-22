import { Service } from './Service';

import { render } from '@testing-library/react';

jest.mock('@lib/sanity', () => ({
	sanityClient: {
		fetch: jest.fn(),
	},
}));

describe('Service', () => {
	it('should render', () => {
		const defaultProps = {
			title: 'Service',
			subtitle: 'Some Subtitle',
			slug: 'service',
			body: [],
			image: 'https://via.placeholder.com/900x600',
		};

		const { container } = render(<Service {...defaultProps} />);

		expect(container.firstChild).toMatchSnapshot();
	});
});
