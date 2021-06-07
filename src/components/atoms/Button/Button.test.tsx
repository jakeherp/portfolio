import { Button } from '../Button';
import { render } from '@testing-library/react';

describe('Button', () => {
	it('renders Button Link correctly', () => {
		const { container } = render(
			<Button href="/url" target="_blank">
				Button text
			</Button>
		);
		expect(container).toMatchSnapshot();
	});
	it('renders Button correctly', () => {
		const { container } = render(
			<Button onClick={jest.fn}>Button text</Button>
		);
		expect(container).toMatchSnapshot();
	});
});
