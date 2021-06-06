import absoluteUrl from 'next-absolute-url';
import { fetcher } from 'Utils/fetcher';
import { GetServerSideProps } from 'next';
import { ISkills } from '@Types';
import styled from 'styled-components';
import Typed from 'react-typed';

import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	skills: ISkills;
}

function Home({ skills }: IProps) {
	const { technologies, frameworks } = skills;

	const talkAbout = [...technologies, ...frameworks];

	return (
		<>
			<SeoHead
				title="Jacob Herper - Front-End Software Engineer"
				description="Front-End Software Engineer with a focus on JavaScript and React.js. I have more than 10 years experience working in software engineering."
			/>

			<Container>
				<Headline>
					Hey, I'm
					<wbr /> Jacob Herper <span>👋</span>
				</Headline>
				<p>
					I am a passionate Software Engineer, specialised in front-end
					development using React and TypeScript. As an advocate for web
					performance and accessibility and an evangelist for the Jamstack, I
					create amazing web applications to make the internet a better place.
					You can talk to me about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
					.
				</p>
				<p>
					P.S. this website is open-source and available on{' '}
					<a
						href="https://github.com/jakeherp/portfolio"
						title="Link to Github repository"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
					.
				</p>
			</Container>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { origin } = absoluteUrl(req);
	const skills = await fetcher(`${origin}/api/skills`);

	return {
		props: {
			skills,
		},
	};
};

const Headline = styled.h2`
	font-size: 2rem;

	span {
		display: none;
	}

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

export default Home;
