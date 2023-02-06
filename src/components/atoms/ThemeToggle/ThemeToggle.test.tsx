import { ThemeToggle } from '../ThemeToggle';

import { render } from '@testing-library/react';

describe('ThemeToggle', () => {
	it('renders correctly', () => {
		const { container } = render(<ThemeToggle />);
		expect(container).toMatchSnapshot();
	});
});
