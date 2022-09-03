import { render } from '@testing-library/react';
import { SkipToContent } from '../SkipToContent';

describe('SkipToContent', () => {
	it('renders correctly', () => {
		const { container } = render(<SkipToContent />);
		expect(container).toMatchSnapshot();
	});
});
