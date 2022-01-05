import { ClientOnly } from '../ClientOnly';
import { render } from '@testing-library/react';

describe('ClientOnly', () => {
	it('renders correctly', () => {
		const { container } = render(
			<ClientOnly>Client-side only content</ClientOnly>
		);
		expect(container).toMatchSnapshot();
	});
});
