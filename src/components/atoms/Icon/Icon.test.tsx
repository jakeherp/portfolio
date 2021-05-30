import { Icon } from '../Icon';
import { render } from '@testing-library/react';

const icons = ['GITHUB', 'LINKEDIN', 'INSTAGRAM', 'TWITTER'];

describe('Icon', () => {
	icons.forEach((icon) => {
		it(`renders ${icon} correctly`, () => {
			// @ts-ignore
			const { container } = render(<Icon icon={icon} />);
			expect(container).toMatchSnapshot();
		});
	});
});
