import { sanityClient } from '@lib/sanity';

import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { BlockContent } from '@types';
import Image from 'next/image';
import Link from 'next/link';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
	return builder.image(source);
};

const components: Partial<PortableTextReactComponents> = {
	types: {
		image: ({ value, ...props }) => {
			console.log(value, props);

			return (
				<div className="relative w-[100vw] md:w-full lg:max-w-4xl aspect-video m-10 -mx-4 md:mx-auto">
					<Image
						src={urlFor(value).url()}
						alt={value.alt}
						className="object-cover"
						fill
					/>
				</div>
			);
		},

		reference: ({ value, ...props }) => {
			console.log({ value, props });

			return null;
		},

		salary: ({ value, ...props }) => {
			console.log({ value, props });

			return <div>SALARY!</div>;
		},
	},

	list: {
		bullet: ({ children }) => (
			<ul className="ml-10 py-4 list-disc space-y-2 text-lg">{children}</ul>
		),
		number: ({ children }) => (
			<ol className="mt-lg list-decimal text-lg">{children}</ol>
		),
	},

	listItem: ({ children }) => <li className="text-lg leading-8">{children}</li>,

	block: {
		h1: ({ children }) => (
			<h1 className="text-5xl py-4 font-bold">{children}</h1>
		),
		h2: ({ children }) => (
			<h2 className="text-4xl py-4 font-bold">{children}</h2>
		),
		h3: ({ children }) => (
			<h3 className="text-3xl py-4 font-bold">{children}</h3>
		),
		h4: ({ children }) => (
			<h4 className="text-2xl py-4 font-bold">{children}</h4>
		),
		normal: ({ children }) => (
			<p className="py-2 text-lg leading-8">{children}</p>
		),
		blockquote: ({ children }) => (
			<blockquote className="border-x-4 font-serif text-lg italic bg-grey-300 dark:bg-grey-700 border-x-grey-500 rounded-md dark:border-x-off-white mx-4 px-4 my-4 py-2">
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
				return <Link href={value.href}>{children}</Link>;
			}

			return (
				<a href={value.href} rel={rel}>
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
