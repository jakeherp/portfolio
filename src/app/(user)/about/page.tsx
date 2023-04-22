import { AnimatePage } from '@components/atoms/AnimatePage';
import { Button } from '@components/atoms/Button';
import { Container } from '@components/atoms/Container';
import { IconDownload } from '@components/atoms/Icons';
import { PodcastList } from '@components/molecules/PodcastList';
import { Education } from '@components/organisms/Education';
import { WorkExperience } from '@components/organisms/WorkExperience';

import { sanityClient } from '@lib/sanity';

import { educationQuery } from '@queries/education';
import { jobsQuery } from '@queries/jobs';
import { podcastsQuery } from '@queries/podcasts';

import { Education as EducationType, Job, Podcast } from '@types';

export const metadata = {
	title:
		'About Jacob Herper, a Senior Software Engineer and Consultant in the UK',
	description:
		'As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place.',
};

const getData = async () => {
	const podcasts: Podcast[] = await sanityClient.fetch(podcastsQuery);
	const jobs: Job[] = await sanityClient.fetch(jobsQuery);
	const education: EducationType[] = await sanityClient.fetch(educationQuery);

	return {
		education,
		jobs,
		podcasts,
	};
};

const AboutPage = async () => {
	const { education, jobs, podcasts } = await getData();

	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Jacob Herper
				</h1>
				<h2 className="mt-2 text-xl font-bold md:text-2xl">
					Senior Software Engineer from the UK
				</h2>
				<p className="mt-8">
					As a passionate front-end developer, I create amazing websites and web
					apps to make the internet a better place. I am an advocate for web
					performance and accessibility as well as a JAMstack enthusiast with
					experience in serverless technologies.
				</p>
				<p className="my-4">
					I am &radic;1,024 years old and have been a web developer for as long
					as I can think. The technologies I work with are JavaScript, HTML and
					CSS with a focus on the frameworks React.js, Gatsby, Next.js, Node and
					Express. I use code not only to do my day-to-day job, but also to
					solve everyday problems I come across.
				</p>
				<p>
					When I am not writing code I love to spend time with my wife and
					five-year-old daughter at home in England or travelling around the
					world. We are quite a multi-cultural family with me having grown up in
					Germany 🇩🇪 and my wife being from Mexico 🇲🇽, which is why we raise our
					daughter trilingual. I myself speak five languages (some better than
					others). Furthermore I enjoy cooking fresh food when I come home after
					a long day at the office.
				</p>
				<h2 className="headline mb-4 mt-12 text-4xl">Podcasts I enjoy</h2>

				<PodcastList podcasts={podcasts} />

				<h2 className="headline mb-4 mt-12 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mb-4 mt-12 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				<Education education={education} />

				<div className="mt-8 flex justify-center">
					<Button
						href="/cv-2023.pdf"
						download={true}
						className="group flex gap-2 whitespace-nowrap"
					>
						<IconDownload />
						Download my CV
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export default AboutPage;
