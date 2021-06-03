import { BlogPost } from '../BlogPost';
import { render } from '@testing-library/react';

describe('BlogPost', () => {
	const props = {
		post: {
			title: 'Blog Post',
			description: 'Blog Description',
			slug: 'blog-post',
			tags: ['blog', 'post'],
			date: '2021-01-01',
		},
	};

	it('renders correctly', () => {
		const { container } = render(<BlogPost {...props} />);
		expect(container).toMatchSnapshot();
	});
});
