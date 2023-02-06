import { School, SchoolProps } from './School';

import { mockSchool } from '@mockdata';

export default {
	title: 'molecules/School',
	component: School,
};

export const SchoolStory = (args: SchoolProps) => <School {...args} />;

SchoolStory.storyName = 'School';
SchoolStory.args = mockSchool;
