import { mockCompany } from './mockCompany';

import { Education } from '@types';

export const mockSchool: Education = {
	institution: mockCompany,
	course: 'Some course',
	date: '2020-01-01',
	courseContents: ['TypeScript', 'React'],
};
