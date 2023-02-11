import { AnimatePage } from '../AnimatePage';

import { render } from '@testing-library/react';

describe('AnimatePage', () => {
	it('renders correctly', () => {
		const { container } = render(<AnimatePage>Page Content</AnimatePage>);
		expect(container).toMatchSnapshot();
	});
});
