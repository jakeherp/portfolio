import { SeoHead } from '@components/atoms/SeoHead';

export default function Head() {
	return (
		<>
			<SeoHead
				title="About Jacob Herper, a Senior Software Engineer and Consultant in the UK"
				description="As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place."
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
