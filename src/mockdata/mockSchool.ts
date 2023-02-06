import { Education } from '@/types';
import { mockCompany } from './mockCompany';

export const mockSchool: Education = {
	institute: mockCompany,
	course: 'Some course',
	date: '2020-01-01',
	technologies: ['TypeScript', 'React'],
};
