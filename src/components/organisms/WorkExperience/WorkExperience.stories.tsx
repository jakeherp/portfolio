import { mockJobs } from 'MockData';
import { WorkExperience, WorkExperienceProps } from './WorkExperience';

export default {
	title: 'organisms/WorkExperience',
	component: WorkExperience,
};

export const WorkExperienceStory = (args: WorkExperienceProps) => (
	<WorkExperience {...args} />
);

WorkExperienceStory.storyName = 'WorkExperience';
WorkExperienceStory.args = {
	jobs: mockJobs,
};
