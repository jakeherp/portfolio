import { ContentBlock } from '@components/atoms/ContentBlock';
import { Job } from '@components/molecules/Job';

import { Job as JobType } from '@types';
import classNames from 'classnames';

export interface WorkExperienceProps {
	jobs: JobType[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
	return (
		<>
			{jobs.map(
				({ company, jobTitle, fromDate, toDate, skills, description }) => (
					<div
						className={classNames(
							'flex transition-all transform md:hover:scale-[1.01]'
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
		</>
	);
};

export { WorkExperience };
