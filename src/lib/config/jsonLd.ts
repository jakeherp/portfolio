export const websiteJsonLd = {
	'@context': 'http://schema.org',
	'@type': 'WebSite',
	name: 'JacobHerper.com',
	alternateName: 'Jacob Herper',
	url: 'https://jacobherper.com/',
	description:
		'Front-End Software Engineer with a focus on React.js and TypeScript. I have more than 12 years experience working in software engineering.',
	image:
		'https://res.cloudinary.com/jacobherper/image/upload/v1681652673/website-2023.png',
};

export const personJsonLd = {
	'@context': 'http://schema.org',
	'@type': 'Person',
	image:
		'https://res.cloudinary.com/jacobherper/image/upload/v1587315576/jacob_herper.jpg',
	name: 'Jacob Herper',
	alternateName: 'JakeHerp',
	url: 'https://jacobherper.com/',
	jobTitle: [
		'Lead Software Engineer',
		'Lead Software Consultant',
		'Frontend Engineer',
		'Front-End Developer',
		'Web Developer',
	],
	hasOccupation: {
		'@type': 'Occupation',
		name: 'Lead Software Engineer',
		occupationLocation: { '@type': 'City', name: 'London' },
		estimatedSalary: [
			{
				'@type': 'MonetaryAmountDistribution',
				name: 'base',
				currency: 'GBP',
				duration: 'P1H',
				percentile10: '74',
				percentile25: '80',
				median: '90',
				percentile75: '100',
				percentile90: '106',
			},
		],
		description:
			'Develops web applications and websites using TypeScript, React and HTML5.',
		skills:
			'HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce',
		alternateName: [
			'Frontend Developer',
			'Full Stack Developer',
			'Frontend Engineer',
		],
		responsibilities: [
			'App Development',
			'Web Design',
			'Website Development',
			'JavaScript Development',
			'WordPress Development',
			'CMS Development',
			'Frontend Development',
			'Full Stack Development',
			'Online Marketing',
			'SEO Services',
			'Web Developer',
			'Website Maintenance',
		],
	},
	sameAs: [
		'http://linkedin.com/in/jacobherper',
		'http://twitter.com/jakeherp',
		'https://github.com/jakeherp',
		'https://www.facebook.com/jakeherp',
		'https://instagram.com/jakeherp',
	],
	brand: [
		{
			'@type': 'Brand',
			name: 'Software Engineer',
			alternateName: 'Front-End Engineer',
		},
		{ '@type': 'Brand', name: 'JakeHerp', alternateName: 'Jacob Herper' },
	],
	memberOf: [
		{
			'@type': 'Organization',
			url: 'https://herper.io/',
			name: 'Herper Ltd',
			alternateName: 'Herper Consulting',
		},
		{
			'@type': 'Organization',
			url: 'https://www.hollandandbarrett.com/',
			name: 'Holland & Barrett',
			alternateName: 'Holland and Barrett International',
		},
	],
	homeLocation: { '@type': 'City', name: 'London' },
	owns: {
		'@type': 'Organization',
		url: 'https://herper.io/',
		name: 'Herper Ltd',
		alternateName: 'Herper Consulting',
	},
	alumniOf: {
		'@type': 'Organization',
		url: 'https://www.thespecialistworks.com/',
		name: 'The Specialist Works',
	},
	nationality: { '@type': 'Country', name: 'Germany' },
	birthDate: '1990-11-06',
	birthPlace: {
		'@type': 'Place',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Oelsnitz',
			postalCode: '08606',
			addressCountry: 'Germany',
		},
	},
	parent: [
		{ name: 'Norbert Herper', jobTitle: 'Chef', birthDate: '1967-08-22' },
		{ name: 'Anne-Kristin Herper', birthDate: '1968-02-26' },
	],
	spouse: {
		name: 'Cinthia Cid Paz',
		birthDate: '1990-09-19',
		nationality: { '@type': 'Country', name: 'Mexico' },
		birthPlace: {
			'@type': 'Place',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Toluca',
				addressCountry: 'Mexico',
			},
		},
	},
};
