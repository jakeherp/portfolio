import { ICaseStudy } from '@types';

import { CaseStudy } from './CaseStudy';
import { mockCaseStudy } from 'MockData';

export default {
	title: 'molecules/CaseStudy',
	component: CaseStudy,
};

export const CaseStudyStory = (args: ICaseStudy) => <CaseStudy {...args} />;

CaseStudyStory.storyName = 'CaseStudy';
CaseStudyStory.args = mockCaseStudy;
