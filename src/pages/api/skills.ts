import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'Redux',
		'RESTful APIs',
		'HTML',
		'CSS',
	];
	const frameworks = ['React', 'Vue.js', 'Next.js', 'Gatsby', 'Svelte'];
	const databases = ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL'];
	const cms = ['WordPress', 'Drupal', 'Contentful', 'Sanity.io'];
	const various = ['SEO', 'Scrum', 'Agile', 'Jira', 'Confluence'];
	const design = [
		'Adobe Illustrator',
		'Adobe InDesign',
		'Adobe Photoshop',
		'Sketch',
		'Zeplin',
		'Figma',
	];
	const softSkills = [
		'Strong communicator',
		'Leadership',
		'Problem solving',
		'Creative thinking',
		'Flexible and adaptive',
		'Team player',
		'Always on time',
	];
	const languages = [
		{
			language: 'English',
			level: 'bilingual',
			icon: '🇬🇧',
		},
		{
			language: 'German',
			level: 'bilingual',
			icon: '🇩🇪',
		},
		{
			language: 'Spanish',
			level: 'intermediate',
			icon: '🇲🇽',
		},
		{
			language: 'Italian',
			level: 'basic',
			icon: '🇮🇹',
		},
		{
			language: 'Russian',
			level: 'basic',
			icon: '🇷🇺',
		},
	];

	res.status(200).json({
		technologies,
		frameworks,
		databases,
		cms,
		various,
		design,
		softSkills,
		languages,
	});
};
