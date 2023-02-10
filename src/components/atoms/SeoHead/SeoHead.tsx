export interface HeadProps {
	title: string;
	description: string;
	lang?: string;
	keywords?: string[];
	author?: string;
	image?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
}

const SeoHead = ({
	title,
	description,
	author = 'Jacob Herper',
	keywords,
	image = 'https://res.cloudinary.com/jacobherper/image/upload/v1641565970/website-dark-light.png',
	meta,
}: HeadProps) => {
	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content="https://jacobherper.com/" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content={author} />
			{meta &&
				meta.length > 0 &&
				meta.map(({ name, content }) => (
					<meta name={name} content={content} key={name} />
				))}
			{image && <meta name="og:image" content={image} />}
			{image && <meta name="twitter:image" content={image} />}
			{keywords && <meta name="keywords" content={keywords.join(', ')} />}
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</>
	);
};

export { SeoHead };
