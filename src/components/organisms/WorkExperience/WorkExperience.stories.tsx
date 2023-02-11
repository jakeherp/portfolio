/* eslint-disable import/no-anonymous-default-export */
import { WorkExperience, WorkExperienceProps } from './WorkExperience';

import { mockJobs } from '@mockdata';

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
