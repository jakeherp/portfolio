import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const positions = [
		{
			company: 'Holland & Barrett',
			jobTitle: 'Software Development Engineer 2',
			startDate: '2020-08-10',
			endDate: null,
			place: 'Nuneaton, England, United Kingdom',
			description: `* Joined Holland & Barrett as a senior software engineer, first with front-end expertise in the fulfilment squad (alongside six back-end engineers)
        * Led hiring process of several further UI engineers across multiple squads
        * Tech lead developing a custom-built customer services portal based on React and Next.js using TypeScript and Redux, retiring a third-party solution, saving a 6-digit sum in licence fees
        * Increased non-existent test-coverage to 90+%
        * Introduced e2e tests using Cypress`,
			technologies: [
				'TypeScript',
				'React',
				'Next.js',
				'Redux',
				'GraphQL',
				'REST API',
				'Jest',
				'Cypress',
			],
		},
		{
			company: 'Dennis Publishing',
			jobTitle: 'Senior Front-End Engineer',
			startDate: '2019-10-07',
			endDate: '2020-08-07',
			place: 'London, England, United Kingdom',
			description: `* Developed web applications using React, JavaScript (ES6), GraphQL and Sass
        * Tech lead for the rebuild of site applications, liaising between engineering and product teams
        * Optimised performance and accessibility of React applications
        * Contributed to advanced error and bug tracking strategy to increase application reliability
        * Improved test coverage by writing unit and integration tests with Jest and Enzyme
        * Implemented platform-wide ad injection logic to work within the SSR React application and AMP pages
        * Mentored more junior engineers through pair programming, code reviews and 1-on-1s`,
			technologies: [
				'JavaScript',
				'React',
				'ES6',
				'GraphQL',
				'Sass',
				'Webpack',
				'Node.js',
				'Express',
				'Apollo',
			],
		},
		{
			company: 'Raconteur',
			jobTitle: 'Front-End Web Developer',
			startDate: '2019-01-15',
			endDate: '2019-10-01',
			place: 'London, England, United Kingdom',
			description: `* Joined as first JavaScript developer to lead the move away from WordPress-based monolithic architectures to more robust and modern React-based systems
        * Developed React web applications using TypeScript, Next.js, Gatsby, GraphQL and Styled-Components with global state management through Context API
        * Worked with WordPress as a headless CMS using GraphQL and REST APIs
        * Developed B2B web applications for several Fortune 500 clients using vanilla JavaScript (ES6) and React
        * Worked on legacy projects using ES5 JavaScript syntax with Gulp as a task runner
        * Lead the redevelopment effort of a new website for Raconteur Agency
        * Tech lead for several internal platform optimisations and new development projects using React and Gatsby`,
			technologies: [
				'TypeScript',
				'React',
				'Gatsby',
				'Next.js',
				'GraphQL',
				'REST API',
				'Styled-Components',
			],
		},
		{
			company: 'The Specialist Works',
			jobTitle: 'Front-End Developer',
			startDate: '2017-12-04',
			endDate: '2019-01-01',
			place: 'London, England, United Kingdom',
			description: `* Tech lead in design and development of new website following brand guidelines based on WordPress, PHP, HTML5, CSS and JavaScript
        * Orchestrating web development work between London and Atlanta offices
        * Collaborating with teams in Beijing, Dublin, New York and Bonn offices to develop custom experiences for clients across the world
        * Development of a web application for a contender energy provider in collaboration with TSW Creative for critical campaign launch under time pressure
        * DevOps tasks monitoring and maintaining Apache server infrastructure and DNS
        * Development of PWA (React) for an event with 250+ attendees
        * Collaborated with internal creative agency to deliver assets for pitches`,
			technologies: [
				'JavaScript',
				'PHP',
				'jQuery',
				'React',
				'Sass',
				'WordPress',
				'REST API',
			],
		},
		{
			company: 'Creativ Agency',
			jobTitle: 'Director of Engineering & Founder',
			startDate: '2018-05-01',
			endDate: '2019-01-01',
			place: 'London, England, United Kingdom',
			description: `* Development of web applications for small and medium-sized businesses using JavaScript, React, PHP, Sass, HTML5, WordPress, Drupal and different e-commerce solutions
        * Specialised in bespoke client solutions for London-based startups
        * Design of digital assets and print products
        * Management of freelance and contract engineers for international projects
        * Search engine optimisation and search engine marketing`,
			technologies: [
				'JavaScript',
				'PHP',
				'Sass',
				'HTML',
				'React',
				'Angular',
				'WordPress',
				'Drupal',
				'Shopify',
				'Magento',
			],
		},
		{
			company: 'Immovato GmbH',
			jobTitle: 'Co-Founder & CTO',
			startDate: '2014-04-01',
			endDate: null,
			place: 'Wiesbaden, Germany',
			description: `* Built a web app to revolutionise the real estate sector in Germany
        * Developed Immovato from the first concept to release of MVP
        * Managed two developers (front-end and back-end) in the development of our application, initially based on Angular (JavaScript) and Laravel (PHP)
        * Moved tech stack to MERN (MongoDB, Express.js, React, Node.js) for an improved performance and DX`,
			technologies: [
				'Angular',
				'React',
				'Node.js',
				'Express',
				'MongoDB',
				'MySQL',
				'Sass',
			],
		},
		{
			company: 'Self-employed',
			jobTitle: 'Full Stack Developer & Designer',
			startDate: '2009-01-15',
			endDate: '2017-03-31',
			place: 'London, England, United Kingdom',
			description: `* Developed websites and web apps for small to medium-sized businesses using WordPress, PHP, HTML5, CSS3, Sass, JavaScript
        * Designed digital and print assets for several clients using Adobe CC (Illustrator, InDesign, Photoshop)
        * Managed freelancers for outsourced projects`,
			technologies: [
				'Angular',
				'React',
				'Node.js',
				'Express',
				'MongoDB',
				'MySQL',
				'Sass',
			],
		},
		{
			company: 'ASA GmbH',
			jobTitle: 'Group Creative Director',
			startDate: '2008-06-01',
			endDate: '2014-10-31',
			place: 'Mainz, Germany',
			description: `* Started working for ASA as a web designer and developer during final years of college, building and maintaining e-commerce websites and product landing pages
        * First insights into day-to-day operations of e-commerce business (B2B and B2C)
        * Design and conception of new products, packaging, brochures, advertising material
        * Design and execution of international trade shows and B2B events
        * Launch of UK branch of ASA Europe in Chelmsford, Essex
        * Market research and legal compliance analysis for the trade of tobacco products in the United Kingdom, meetings with UK Trade & Investment and HMRC to explore importing of restricted goods
        * Built retail business to become highest-grossing of its kind in the UK within 12 months`,
			technologies: [
				'PHP',
				'HTML',
				'CSS',
				'JavaScript',
				'MS SQL',
				'MySQL',
				'Sass',
			],
		},
	];

	res.status(200).json({ positions });
};
