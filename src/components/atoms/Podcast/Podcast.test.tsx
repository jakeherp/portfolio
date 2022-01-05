import { mockPodcast } from 'MockData';
import { Podcast } from '../Podcast';
import { render } from '@testing-library/react';

describe('Podcast', () => {
	it('renders correctly', () => {
		const { container } = render(<Podcast {...mockPodcast} />);
		expect(container).toMatchSnapshot();
	});
});
