const SkipToContent = () => {
	return (
		<a
			href="#content"
			className="sr-only focus:not-sr-only focus:absolute top-2 left-2 focus:z-[1000]"
		>
			Skip to content
		</a>
	);
};

export { SkipToContent };
