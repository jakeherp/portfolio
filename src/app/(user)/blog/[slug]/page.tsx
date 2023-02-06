'use client';

import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';

const BlogPostPage = () => {
	return (
		<AnimatePage>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
					title
				</h1>
			</Container>
		</AnimatePage>
	);
};

export default BlogPostPage;
