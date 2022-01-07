import { FloatingImages } from '../FloatingImages';
import { render } from '@testing-library/react';

describe('FloatingImages', () => {
	it('renders correctly', () => {
		const { container } = render(<FloatingImages />);
		expect(container).toMatchSnapshot();
	});
});
