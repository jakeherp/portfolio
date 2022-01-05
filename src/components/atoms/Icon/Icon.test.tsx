import { render } from '@testing-library/react';
import { Icon, IconProps } from '../Icon';

const icons: IconProps['icon'][] = [
	'GITHUB',
	'LINKEDIN',
	'INSTAGRAM',
	'TWITTER',
];

describe('Icon', () => {
	icons.forEach((icon) => {
		it(`renders ${icon} correctly`, () => {
			const { container } = render(<Icon icon={icon} />);
			expect(container).toMatchSnapshot();
		});
	});
});
