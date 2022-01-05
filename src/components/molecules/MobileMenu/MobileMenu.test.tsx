import { MobileMenu } from '../MobileMenu';
import { render } from '@testing-library/react';

describe('MobileMenu', () => {
	it('renders correctly', () => {
		const { container } = render(<MobileMenu isOpen={true} />);
		expect(container).toMatchSnapshot();
	});
});
