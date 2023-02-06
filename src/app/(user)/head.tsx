import { SeoHead } from '@components/atoms/SeoHead';

export default function Head() {
	return (
		<>
			<SeoHead
				title="Senior Software Engineer and Consultant – Jacob Herper"
				description="A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting."
				keywords={[
					'Software Engineer',
					'Jacob Herper',
					'Software Consulting',
					'Front-End',
					'Full-Stack',
					'React',
					'TypeScript',
					'JavaScript',
					'GraphQL',
					'CSS',
					'Tailwind',
				]}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/assets/favicon_dark.svg"
			/>
		</>
	);
}
