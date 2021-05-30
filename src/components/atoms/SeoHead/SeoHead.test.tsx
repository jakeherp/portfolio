import { SeoHead } from './SeoHead';
import { render } from '@testing-library/react';

describe('Head', () => {
	it('renders correctly', () => {
		const { container } = render(
			<SeoHead title="Some page" description="Some description" />
		);
		expect(container).toMatchSnapshot();
	});
});
