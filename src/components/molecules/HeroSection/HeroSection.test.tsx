import { HeroSection } from './HeroSection';

import { render } from '@testing-library/react';

describe('HeroSection', () => {
	it('renders correctly', () => {
		const { container } = render(<HeroSection />);
		expect(container).toMatchSnapshot();
	});
});
