import { BlogPost, BlogPostProps } from './BlogPost';

export default {
	title: 'atoms/BlogPost',
	component: BlogPost,
};

export const BlogPostStory = (args: BlogPostProps) => <BlogPost {...args} />;

BlogPostStory.storyName = 'BlogPost';
BlogPostStory.args = {
	post: {
		title: 'Blog Post',
		description: 'Blog Description',
		slug: 'blog-post',
		tags: ['blog', 'post'],
		date: '2021-01-01',
	},
};
