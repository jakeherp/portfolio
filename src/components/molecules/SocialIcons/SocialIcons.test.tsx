import { SocialIcons } from '../SocialIcons';

import { render } from '@testing-library/react';

describe('SocialIcons', () => {
	it('renders correctly', () => {
		const { container } = render(
			<SocialIcons
				profiles={[
					{
						url: 'https://github.com',
						name: 'Github',
						icon: 'GITHUB',
					},
				]}
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
