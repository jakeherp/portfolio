import { IJob } from '@types';

import classNames from 'classnames';
import { RichText } from '@graphcms/rich-text-react-renderer';

import { Job } from 'Molecules/Job';
import { mdxComponents } from 'utils/mdxComponents';

export interface WorkExperienceProps {
	jobs: IJob[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
	return (
		<>
			{jobs.map(
				(
					{ company, jobTitle, fromDate, toDate, technologies, description },
					index
				) => (
					<div
						className={classNames(
							'flex transition-all transform md:hover:scale-[1.01]',
							{
								'justify-end': index % 2 !== 0,
							}
						)}
						key={`${company} ${jobTitle}`}
					>
						<Job
							company={company}
							jobTitle={jobTitle}
							fromDate={fromDate}
							toDate={toDate}
							technologies={technologies}
						>
							<RichText renderers={mdxComponents} content={description} />
						</Job>
					</div>
				)
			)}
		</>
	);
};

export { WorkExperience };
