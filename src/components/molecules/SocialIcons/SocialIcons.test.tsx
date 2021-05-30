import { SocialIcons } from '../SocialIcons';
import { render } from '@testing-library/react';

describe('SocialIcons', () => {
	it('renders correctly', () => {
		const { container } = render(<SocialIcons />);
		expect(container).toMatchSnapshot();
	});
});
