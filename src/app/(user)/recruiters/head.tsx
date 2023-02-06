import { SeoHead } from '@components/atoms/SeoHead';

export default function Head() {
	return (
		<>
			<SeoHead
				title="Recruiter Information about Jacob Herper"
				description="Thank you for your interest in me for software engineering roles you are hiring for."
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
