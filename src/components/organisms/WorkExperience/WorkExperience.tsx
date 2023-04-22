import { ContentBlock } from '@components/atoms/ContentBlock';
import { Job } from '@components/molecules/Job';

import type { Job as JobType } from '@types';
import classNames from 'classnames';

export interface WorkExperienceProps {
	jobs: JobType[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
	const Spacer = () => <div className="md:w-1/8 w-12 shrink-0 grow-0" />;

	return (
		<div className="w-[calc(100% + 2rem)] relative -mx-4 flex snap-x snap-center gap-6 overflow-hidden overflow-x-auto pb-14 lg:mx-0 lg:w-full">
			<Spacer />
			{jobs.map(
				({ company, jobTitle, fromDate, toDate, skills, description }) => (
					<div
						className={classNames(
							'flex w-4/5 shrink-0 transform snap-center transition-all md:w-3/4 lg:w-1/3'
						)}
						key={`${company} ${jobTitle}`}
					>
						<Job
							company={company}
							jobTitle={jobTitle}
							fromDate={fromDate}
							toDate={toDate}
							skills={skills}
						>
							<ContentBlock value={description} />
						</Job>
					</div>
				)
			)}
			<Spacer />
		</div>
	);
};

export { WorkExperience };
