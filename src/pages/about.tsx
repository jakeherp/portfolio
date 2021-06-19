import absoluteUrl from 'next-absolute-url';
import { differenceInCalendarYears } from 'date-fns';
import { fetcher } from 'Utils/fetcher';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { useState } from 'react';

import { IEducation, IJob } from '@Types';

import { Container } from 'Atoms/Container';
import { Education } from 'Atoms/Education';
import { Position } from 'Atoms/Position';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	jobs: IJob[];
	education: IEducation[];
}

function About({ jobs, education }: IProps) {
	const [loadedJobs, setLoadedJobs] = useState(2);

	const loadMore = () => {
		setLoadedJobs((prev) => prev + 3);
	};

	return (
		<>
			<SeoHead
				title="About Jacob Herper - Front-End Software Engineer"
				description="As a passionate front-end developer, I create amazing websites and web apps to make the internet a better place."
			/>

			<Container>
				<Headline>Hey, I&apos;m Jacob Herper</Headline>
				<h3>A senior software engineer from England</h3>
				<p>
					As a passionate front-end developer, I create amazing websites and web
					apps to make the internet a better place. I am an advocate for web
					performance and accessibility as well as a JAMstack enthusiast with
					experience in serverless technologies.
				</p>
				<p>
					I am {differenceInCalendarYears(new Date(), new Date('1990-11-06'))}{' '}
					years old and have been a web developer for as long as I can think.
					The technologies I work with are JavaScript, HTML and CSS with a focus
					on the frameworks React.js, Gatsby, Next.js, Node and Express. I use
					code not only to do my day-to-day job, but also to solve everyday
					problems I come across.
				</p>
				<p>
					When I am not writing code I love to spend time with my wife and 3
					year old daughter at home in London or travelling around the world. We
					are quite a multi-cultural family with me having grown up in Germany
					🇩🇪 and my wife being from Mexico 🇲🇽, which is why we raise our
					daughter trilingual. I myself speak five languages (some better than
					others). Furthermore I enjoy cooking fresh food when I come home after
					a long day at the office.
				</p>

				<h2>Experience</h2>
				{jobs.slice(0, loadedJobs).map((job, i) => (
					<Position job={job} key={job.company + i} />
				))}
				<Center>
					{loadedJobs < jobs.length && (
						<button onClick={loadMore}>Load more</button>
					)}
				</Center>

				<h2>Education</h2>
				{education.map((edu) => (
					<Education education={edu} key={edu.course} />
				))}

				<Center>
					<a href="/cv-2021.pdf" target="_blank">
						Download a copy of my CV
					</a>
				</Center>
			</Container>
		</>
	);
}

const Headline = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;

	@media screen and (min-width: 768px) {
		font-size: 3rem;

		span {
			display: inline-block;
		}

		@keyframes wave {
			0% {
				transform: rotate(0);
			}
			50% {
				transform: rotate(-10deg);
			}
			100% {
				transform: rotate(10deg);
			}
		}

		&:hover span {
			animation: wave 0.5s ease infinite;
		}
	}
`;

const Center = styled.div`
	text-align: center;
	font-weight: bold;
	margin-top: 2rem;

	button {
		display: block;
		margin: 2rem auto;
		border: 2px solid ${({ theme }) => theme.text};
		color: ${({ theme }) => theme.text};
		padding: 0.5rem 3rem;
		border-radius: 5px;
		background: transparent;
	}
`;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { origin } = absoluteUrl(req);
	const { positions } = await fetcher(`${origin}/api/jobs`);
	const { education } = await fetcher(`${origin}/api/education`);
	const skills = await fetcher(`${origin}/api/skills`);

	return {
		props: {
			jobs: positions,
			education,
			skills,
		},
	};
};

export default About;
