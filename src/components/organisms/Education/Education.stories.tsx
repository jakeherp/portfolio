/* eslint-disable import/no-anonymous-default-export */
import { Education, EducationProps } from './Education';

import { mockSchool } from '@mockdata';

export default {
	title: 'organisms/Education',
	component: Education,
};

export const EducationStory = (args: EducationProps) => <Education {...args} />;

EducationStory.storyName = 'Education';
EducationStory.args = {
	education: [mockSchool],
};
