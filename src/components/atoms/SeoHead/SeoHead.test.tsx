import { render } from '@testing-library/react';
import { SeoHead } from './SeoHead';

describe('Head', () => {
	it('renders correctly', () => {
		const { container } = render(
			<SeoHead title="Some page" description="Some description" />
		);
		expect(container).toMatchSnapshot();
	});
});
