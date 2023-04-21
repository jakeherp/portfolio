import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { Service } from '@components/atoms/Service/Service';
import { HeroSection } from '@components/molecules/HeroSection/HeroSection';

import { sanityClient } from '@lib/sanity';
import { Service as ServiceType } from '@types';
import { servicesQuery } from '@queries/services';

import LogoCypress from '@root/public/assets/tools/cypress.svg';
import LogoFigma from '@root/public/assets/tools/figma.svg';
import LogoGraphql from '@root/public/assets/tools/graphql.svg';
import LogoHygraph from '@root/public/assets/tools/hygraph.svg';
import LogoNext from '@root/public/assets/tools/nextjs.svg';
import LogoSanity from '@root/public/assets/tools/sanity.svg';
import LogoStorybook from '@root/public/assets/tools/storybook.svg';
import LogoSvelte from '@root/public/assets/tools/svelte.svg';
import LogoVercel from '@root/public/assets/tools/vercel.svg';

const getData = async () => {
	const services: ServiceType[] = await sanityClient.fetch(servicesQuery);

	return { services };
};

export const metadata = {
	title: 'Software Engineer and Consultant Jacob Herper',
	description:
		'A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting.',
	keywords: [
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
	],
};

const HomePage = async () => {
	const { services } = await getData();

	return (
		<AnimatePage>
			<HeroSection />
			<section id="tools" className="my-40">
				<Container>
					<h2 className="headline mt-24 text-center text-xl md:text-2xl lg:text-3xl">
						Some of my favourite tools
					</h2>

					<div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-16 gap-y-8">
						<LogoNext className="w-32" aria-label="Next.js" />
						<LogoSvelte className="w-12" aria-label="SvelteKit" />
						<LogoHygraph className="w-28 md:w-36" aria-label="Hygraph" />
						<LogoSanity className="w-32 md:w-40" aria-label="Sanity" />
						<LogoStorybook className="w-32 md:w-40" aria-label="Storybook" />
						<LogoGraphql className="w-28 md:w-36" aria-label="GraphQL" />
						<LogoVercel className="w-32 md:w-36" aria-label="Vercel" />
						<LogoFigma className="w-8" aria-label="Figma" />
						<LogoCypress className="w-32 md:w-40" aria-label="Cypress" />
					</div>
				</Container>
			</section>
			<section id="services">
				<Container>
					<h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
						Services I provide
						<span className="mt-2 block text-xl font-bold text-off-black dark:text-off-white md:text-2xl">
							as a software architect with a passion for creating applications
							and websites that people love.
						</span>
					</h2>

					{services.map((service, i) => (
						<Service key={service.slug} {...service} isReversed={i % 2 !== 0} />
					))}
				</Container>
			</section>
		</AnimatePage>
	);
};

export default HomePage;
