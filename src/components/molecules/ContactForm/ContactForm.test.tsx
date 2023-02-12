import { ContactForm } from '../ContactForm';

import { render } from '@testing-library/react';

jest.spyOn(console, 'error').mockImplementation(jest.fn);

describe('ContactForm', () => {
	it('renders correctly', () => {
		const { container } = render(<ContactForm />);
		expect(container).toMatchSnapshot();
	});
});
