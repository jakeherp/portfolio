import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const education = [
		{
			institute: 'Harvard X',
			website: 'https://cs50.harvard.edu/x/',
			course: 'CS50',
			endDate: '2020-06-20',
			place: 'remote',
			technologies: ['C', 'Python', 'SQL', 'Algorithms', 'Data Structures'],
		},
		{
			institute: 'University of Helsinki',
			website: 'https://fullstackopen.com/en/',
			course: 'Full-Stack Open',
			endDate: '2019-09-30',
			place: 'remote',
			technologies: [
				'React',
				'JavaScript',
				'Node.js',
				'Express',
				'GraphQL',
				'Cypress',
				'Jest',
			],
		},
	];

	res.status(200).json({ education });
};
