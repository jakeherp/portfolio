import styled from 'styled-components';
import { getAllDocuments, getBySlug } from 'Utils/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import { Container } from 'Atoms/Container';
import { List } from 'Atoms/List';
import { SeoHead } from 'Atoms/SeoHead';
import { Button } from 'Atoms/Button';

export default function BlogPost({ item, mdxSource }: any) {
	const { title, link, type, technologies, slug } = item;

	const components = {
		img: (props: any) => (
			<Image {...props} width={1920} height={1080} objectFit="cover" />
		),
	};

	return (
		<>
			<SeoHead
				title={`${title} - Jacob Herper's Portfolio - Front-End Software Engineer`}
				description={`Project ${title} developed by Jacob Herper using ${technologies.join(
					', '
				)}.`}
			/>
			<Container>
				<Image
					src={`/portfolio/${slug}.jpg`}
					width={1920}
					height={1080}
					objectFit="cover"
					alt={`Screenshot of ${title}`}
				/>{' '}
				<Headline>{title}</Headline>
				<h3>{type}</h3>
				<MDXRemote {...mdxSource} components={components} />
				<h2>Technologies used:</h2>
				<List>
					{technologies.map((tech: string) => (
						<li key={tech}>{tech}</li>
					))}
				</List>
				<Button href={link} target="_blank">
					Visit project
				</Button>
			</Container>
		</>
	);
}

export async function getStaticProps({ params }: any) {
	const item = getBySlug('PORTFOLIO', params.slug, [
		'title',
		'slug',
		'link',
		'type',
		'technologies',
		'content',
	]);

	if (!item?.content) return {};

	const mdxSource = await serialize(item.content);

	return {
		props: { item, mdxSource },
	};
}

export async function getStaticPaths() {
	const items = getAllDocuments('PORTFOLIO', ['slug']);

	return {
		paths: items.map((item) => {
			return {
				params: { ...item },
			};
		}),
		fallback: false,
	};
}

const Headline = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;

	& + h3 {
		margin: 0;
	}

	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}
`;

const Text = styled.p`
	margin-top: 3rem 0;
	display: flex;
	align-items: baseline;
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const Tags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	color: ${({ theme }) => theme.grey};

	li {
		margin-left: 1rem;
		font-size: 0.9rem;
	}
`;
