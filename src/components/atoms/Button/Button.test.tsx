import { Button } from '../Button';

import { render } from '@testing-library/react';

describe('Button', () => {
	it('renders Link correctly', () => {
		const { container } = render(<Button href="/">Button Link</Button>);
		expect(container).toMatchSnapshot();
	});

	it('renders Button correctly', () => {
		const { container } = render(<Button onClick={jest.fn}>Button</Button>);
		expect(container).toMatchSnapshot();
	});
});
