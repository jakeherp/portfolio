import { List } from '../List';
import { render } from '@testing-library/react';

describe('List', () => {
	it('renders correctly', () => {
		const { container } = render(
			<List>
				<li>List element</li>
			</List>
		);
		expect(container).toMatchSnapshot();
	});
});
