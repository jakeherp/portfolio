import CodeBlock from './Code';

import { sanityClient } from '@lib/sanity';

import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { BlockContent } from '@types';
import Image from 'next/image';
import Link from 'next/link';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
	return builder.image(source);
};

const components: Partial<PortableTextReactComponents> = {
	types: {
		image: ({ value }) => (
			<div className="relative m-10 -mx-4 aspect-video w-[100vw] md:mx-auto md:w-full lg:max-w-4xl">
				<Image
					src={urlFor(value).url()}
					alt={value.alt}
					className="object-cover"
					fill
				/>
			</div>
		),

		code: ({ value }) => {
			return <CodeBlock code={value.code} language={value.language} />;
		},

		reference: () => null,
	},

	list: {
		bullet: ({ children }) => (
			<ul className="ml-6 list-disc space-y-2 py-4 text-lg">{children}</ul>
		),
		number: ({ children }) => (
			<ol className="mt-lg list-decimal text-lg">{children}</ol>
		),
	},

	listItem: ({ children }) => (
		<li className="text-base leading-6">{children}</li>
	),

	block: {
		h1: ({ children }) => (
			<h1 className="py-4 text-5xl font-bold">{children}</h1>
		),
		h2: ({ children }) => (
			<h2 className="py-4 text-4xl font-bold">{children}</h2>
		),
		h3: ({ children }) => (
			<h3 className="py-4 text-3xl font-bold">{children}</h3>
		),
		h4: ({ children }) => (
			<h4 className="py-4 text-2xl font-bold">{children}</h4>
		),
		normal: ({ children }) => (
			<p className="py-2 text-lg leading-8">{children}</p>
		),
		blockquote: ({ children }) => (
			<blockquote className="mx-4 my-4 rounded-md border-x-4 border-x-grey-500 bg-grey-300 px-4 py-2 font-serif text-lg italic dark:border-x-off-white dark:bg-grey-700">
				{children}
			</blockquote>
		),
	},

	marks: {
		link: ({ children, value }) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined;

			if (!rel) {
				return (
					<Link
						href={value.href}
						className="underlined relative border-b-2 border-grey-300 font-bold hover:border-b-0 dark:border-grey-700"
					>
						{children}
					</Link>
				);
			}

			return (
				<a
					href={value.href}
					rel={rel}
					className="underlined relative font-bold"
				>
					{children}
				</a>
			);
		},
		span: ({ children }) => <span>{children}</span>,
		strong: ({ children }) => <strong className="font-bold">{children}</strong>,
		em: ({ children }) => <em className="italic">{children}</em>,
	},
};

interface ContentBlockProps {
	value: BlockContent[];
}

export const ContentBlock = ({ value }: ContentBlockProps) => {
	return <PortableText value={value} components={components} />;
};
