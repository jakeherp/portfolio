/* eslint-disable import/no-anonymous-default-export */
import { Job } from './Job';

import { mockJobs } from '@mockdata';
import type { Job as JobType } from '@types';

export default {
	title: 'molecules/Job',
	component: Job,
};

export const JobStory = (args: Omit<JobType, 'description'>) => (
	<Job {...args} />
);

JobStory.storyName = 'Job';
JobStory.args = {
	...mockJobs[0],
	children: <div>Some body</div>,
};
