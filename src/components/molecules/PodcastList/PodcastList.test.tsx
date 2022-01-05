import { mockPodcast } from 'MockData';
import { PodcastList } from '../PodcastList';
import { render } from '@testing-library/react';

describe('PodcastList', () => {
	it('renders correctly', () => {
		const { container } = render(<PodcastList podcasts={[mockPodcast]} />);
		expect(container).toMatchSnapshot();
	});
});
