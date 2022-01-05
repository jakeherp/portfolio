import { IEducation } from '@types';
import { mockCompany } from './mockCompany';

export const mockSchool: IEducation = {
	institute: mockCompany,
	course: 'Some course',
	date: '2020-01-01',
	technologies: ['TypeScript', 'React'],
};
