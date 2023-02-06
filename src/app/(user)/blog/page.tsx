'use client';

import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';

const BlogPage = () => {
	return (
		<AnimatePage>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
					Blog
				</h1>
			</Container>
		</AnimatePage>
	);
};

export default BlogPage;
