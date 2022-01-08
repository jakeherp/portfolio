import { Container } from 'Atoms/Container';
import { Layout } from 'Templates/Layout';
import Typed from 'react-typed';

const IndexPage = () => {
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
		<Layout
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
		>
			<Container>
				<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Jacob Herper 👋
				</h1>
				<p className="my-8 text-lg">
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
						className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
					>
						Github
					</a>
					.
				</p>
			</Container>
		</Layout>
	);
};

export default IndexPage;
