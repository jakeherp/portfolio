/* eslint-disable import/no-anonymous-default-export */
import { CaseStudyProps } from './CaseStudy';
import { CaseStudy } from './CaseStudy';

import { mockCaseStudy } from '@mockdata';

export default {
	title: 'molecules/CaseStudy',
	component: CaseStudy,
};

export const CaseStudyStory = (args: CaseStudyProps) => <CaseStudy {...args} />;

CaseStudyStory.storyName = 'CaseStudy';
CaseStudyStory.args = {
	...mockCaseStudy,
	index: 0,
};
