import { mockCompany } from './mockCompany';

import { Education } from '@types';

export const mockSchool: Education = {
	institute: mockCompany,
	course: 'Some course',
	date: '2020-01-01',
	technologies: ['TypeScript', 'React'],
};
