import { render } from '@testing-library/react';
import { SocialIcons } from '../SocialIcons';

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
