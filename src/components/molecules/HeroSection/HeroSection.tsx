import { TypeWriter } from '@components/atoms/TypeWriter';

import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
	const talkAbout = [
		'React',
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'Redux',
		'Jamstack',
		'Next.js',
		'RESTful APIs',
		'HTML',
		'CSS',
		'Gatsby',
		'Svelte',
	];

	return (
		<section id="hero" className="relative isolate overflow-hidden pt-14">
			<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-from-t from-off-white dark:from-black sm:h-32" />
			<div
				className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] lg:shadow-xl dark:shadow-slate-700 sm:-mr-80 lg:-mr-96"
				aria-hidden="true"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
					<h1 className="headline max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto">
						Hey, I&apos;m Jacob Herper
					</h1>
					<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
						<p className="text-lg leading-8 text-slate-600 dark:text-off-white">
							I am a passionate Software Engineer, specialised in front-end
							development using React and TypeScript. As an advocate for web
							performance and accessibility and an evangelist for the Jamstack,
							I create amazing web applications to make the internet a better
							place.
							<br />
							You can talk to me about <TypeWriter strings={talkAbout} />.
						</p>
						<p className="text-lg leading-8 text-slate-600 dark:text-off-white">
							P.S. this website is open-source and available on{' '}
							<a
								href="https://github.com/jakeherp/portfolio"
								title="Link to Github repository"
								target="_blank"
								rel="noopener noreferrer"
								className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
							>
								Github
							</a>
							.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Link
								href="/contact"
								className="rounded-md bg-blue-700 hover:bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Get in touch
							</Link>
							<Link
								href="/about"
								className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-200"
							>
								Read more <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
					<Image
						src="/assets/jacob.jpg"
						alt="Photo of Jacob Herper"
						height={300}
						width={450}
						className="mt-10 lg:ml-20 aspect-[6/5] max-w-full rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
					/>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-off-white dark:from-black sm:h-32" />
		</section>
	);
};
