import { PodcastList } from '../PodcastList';

import { mockPodcast } from '@mockdata';
import { render } from '@testing-library/react';

describe('PodcastList', () => {
	it('renders correctly', () => {
		const { container } = render(<PodcastList podcasts={[mockPodcast]} />);
		expect(container).toMatchSnapshot();
	});
});
