import { Container } from '../Container';
import { render } from '@testing-library/react';

describe('Container', () => {
	it('renders correctly', () => {
		const { container } = render(<Container>Page Content</Container>);
		expect(container).toMatchSnapshot();
	});
});
