import { Box } from '../Box';
import { render } from '@testing-library/react';

describe('Box', () => {
	it('renders correctly', () => {
		const { container } = render(<Box>Hello Box</Box>);
		expect(container).toMatchSnapshot();
	});
});
