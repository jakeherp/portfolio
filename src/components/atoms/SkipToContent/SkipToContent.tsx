const SkipToContent = () => {
	return (
		<a
			href="#content"
			className="sr-only left-2 top-2 focus:not-sr-only focus:absolute focus:z-[1000]"
		>
			Skip to content
		</a>
	);
};

export { SkipToContent };
