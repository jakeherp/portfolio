import { Footer } from '../Footer';

import { render } from '@testing-library/react';

describe('Footer', () => {
	it('renders correctly', () => {
		const { container } = render(<Footer />);
		expect(container).toMatchSnapshot();
	});
});
