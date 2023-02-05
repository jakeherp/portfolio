const SkipToContent = () => {
	return (
		<a
			href="#content"
			className="sr-only focus:not-sr-only focus:absolute focus:z-10"
		>
			Skip to content
		</a>
	);
};

export { SkipToContent };
