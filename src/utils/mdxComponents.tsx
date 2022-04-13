import { NodeRendererType } from '@graphcms/rich-text-react-renderer';

import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Image from 'next/image';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';

export const mdxComponents: NodeRendererType = {
	h2: ({ children }) => <h2 className="headline text-3xl mt-8">{children}</h2>,
	h3: ({ children }) => <h3 className="headline text-2xl mt-8">{children}</h3>,
	a: ({ children, href }) => {
		return (
			<a
				href={href}
				target="_blank"
				className="underlined relative"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		);
	},
	ul: ({ children }) => <ul className="list-disc ml-4 mt-4">{children}</ul>,
	li: ({ children }) => <li className="mt-1">{children}</li>,
	p: ({ children }) => (
		<p className="mt-4 mb-4 text-lg leading-7">{children}</p>
	),
	code: ({ children }) => (
		<SyntaxHighlighter
			language="typescript"
			style={dracula}
			className="text-sm rounded-md p-4 border border-grey-300 dark:border-grey-700 shadow-lg shadow-grey-500 dark:shadow-grey-800"
		>
			{children}
		</SyntaxHighlighter>
	),
	img: ({ altText, src }) => (
		<div className="relative w-full aspect-video drop-shadow-xl">
			<Image
				src={src!}
				alt={altText}
				layout="fill"
				objectFit="cover"
				className="mt-4 mb-4"
			/>
		</div>
	),
	bold: ({ children }) => <strong>{children}</strong>,
};
