import { FloatingImages } from '../FloatingImages';
import { render } from '@testing-library/react';

describe('FloatingImages', () => {
	it('renders correctly', () => {
		const { container } = render(
			<FloatingImages
				mainImage="/some-img.png"
				topFloatingImage="/top-image.png"
				bottomFloatingImage="/bottom-image.png"
				altText="Some image"
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
