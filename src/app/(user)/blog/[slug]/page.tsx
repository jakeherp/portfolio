'use client';

import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';

import { sanityClient } from '@lib/sanity';

import { Post } from '@types';
import { groq } from 'next-sanity';

export const generateStaticParams = async () => {
	const query = groq`
		*[_type == 'post'] {
			"slug": slug.current
		}
	`;

	const slugs: Pick<Post, 'slug'>[] = await sanityClient.fetch(query);

	return slugs.map(({ slug }) => slug);
};

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
