import { render } from '@testing-library/react';
import { SocialIcons } from '../SocialIcons';

describe('SocialIcons', () => {
	it('renders correctly', () => {
		const { container } = render(<SocialIcons />);
		expect(container).toMatchSnapshot();
	});
});
