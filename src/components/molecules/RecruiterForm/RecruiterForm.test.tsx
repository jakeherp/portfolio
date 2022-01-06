import { RecruiterForm } from '../RecruiterForm';
import { render } from '@testing-library/react';

describe('RecruiterForm', () => {
	it('renders correctly', () => {
		const { container } = render(
			<RecruiterForm handleSubmit={jest.fn} success={false} error={false} />
		);
		expect(container).toMatchSnapshot();
	});
});
