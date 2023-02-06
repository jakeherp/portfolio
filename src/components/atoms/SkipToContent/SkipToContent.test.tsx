import { SkipToContent } from '../SkipToContent';

import { render } from '@testing-library/react';

describe('SkipToContent', () => {
	it('renders correctly', () => {
		const { container } = render(<SkipToContent />);
		expect(container).toMatchSnapshot();
	});
});
