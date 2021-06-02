import { Education, EducationProps } from './Education';

export default {
	title: 'atoms/Education',
	component: Education,
};

export const EducationStory = (args: EducationProps) => <Education {...args} />;

EducationStory.storyName = 'Education';
EducationStory.args = {
	education: {
		institute: 'Harvard X',
		course: 'CS50',
		endDate: '2020-06-20',
		place: 'remote',
		technologies: ['C', 'Python', 'SQL', 'Algorithms', 'Data Structures'],
	},
};
