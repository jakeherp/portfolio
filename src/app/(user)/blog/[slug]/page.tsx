import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { ContentBlock } from '@components/atoms/ContentBlock';
import { ErrorFallback } from '@components/templates/ErrorFallback';

import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';

import type { Post } from '@types';
import { groq } from 'next-sanity';

interface PageProps {
	params: {
		slug: string;
	};
}

const getData = async (slug: string) => {
	const post: [Post] = await sanityClient.fetch(postsQuery(slug));

	return post[0];
};

export const generateMetadata = async ({ params }: PageProps) => {
	const post = await getData(params.slug);
	return {
		title: `${post?.title} - Jacob Herper's Blog`,
		description: post?.seoDescription,
	};
};

const BlogPostPage = async ({ params }: PageProps) => {
	const { slug } = params;

	try {
		const post = await getData(slug);

		return (
			<AnimatePage>
				<Container>
					<article className="mx-auto lg:w-2/3">
						<h1 className="headline mt-8 pb-8 text-3xl md:text-4xl lg:text-5xl">
							{post.title}
						</h1>
						<ContentBlock value={post.body} />
					</article>
				</Container>
			</AnimatePage>
		);
	} catch (error) {
		return <ErrorFallback />;
	}
};

export default BlogPostPage;

export const generateStaticParams = async () => {
	const query = groq`
		*[_type == 'post'] {
			"slug": slug.current
		}
	`;

	const slugs: Pick<Post, 'slug'>[] = await sanityClient.fetch(query);

	return slugs.map(({ slug }) => ({ slug }));
};
