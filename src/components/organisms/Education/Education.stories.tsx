import { mockSchool } from 'MockData';
import { Education, EducationProps } from './Education';

export default {
	title: 'organisms/Education',
	component: Education,
};

export const EducationStory = (args: EducationProps) => <Education {...args} />;

EducationStory.storyName = 'Education';
EducationStory.args = {
	education: [mockSchool],
};
