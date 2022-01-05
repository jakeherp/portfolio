import { mockSchool } from 'MockData';
import { School, SchoolProps } from './School';

export default {
	title: 'molecules/School',
	component: School,
};

export const SchoolStory = (args: SchoolProps) => <School {...args} />;

SchoolStory.storyName = 'School';
SchoolStory.args = mockSchool;
