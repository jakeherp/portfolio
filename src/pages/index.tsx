import { Container } from 'Atoms/Container';
import Head from 'next/head';
import styled from 'styled-components';

function Home() {
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container>
				<Headline>Hey, I'm Jacob Herper</Headline>
				<p>
					I am a passionate Software Engineer, specialised in front-end
					development using React and TypeScript. As an advocate for web
					performance and accessibility and an evangelist for the Jamstack, I
					create amazing web applications to make the internet a better place.
				</p>
				<p>
					P.S. this website is open-source and available on{' '}
					<a href="https://github.com/jakeherp/portfolio" target="_blank">
						Github
					</a>
					.
				</p>
			</Container>
		</>
	);
}

const Headline = styled.h2`
	font-size: 3rem;
`;

export default Home;
