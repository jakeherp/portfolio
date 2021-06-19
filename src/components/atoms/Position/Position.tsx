import { FC } from 'react';
import { format } from 'date-fns';
import { IJob } from '@Types';
import Markdown from 'markdown-to-jsx';
import { Flex, StyledPosition, Text } from './styles';

export interface PositionProps {
	job: IJob;
}

const Position: FC<PositionProps> = ({ job }) => {
	return (
		<StyledPosition>
			<Flex>
				<div>
					<strong>{job.jobTitle}</strong> -{' '}
					{job.website ? (
						<a href={job.website} target="_blank" rel="noopener noreferrer">
							{job.company}
						</a>
					) : (
						job.company
					)}
				</div>
				<div>
					{format(new Date(job.startDate), 'MM/yyyy')} -{' '}
					{job.endDate ? format(new Date(job.endDate), 'MM/yyyy') : 'present'}
				</div>
			</Flex>
			<small>
				<em>
					<strong>Technologies:</strong> {job.technologies.join(', ')}
				</em>
			</small>
			<Text>
				<Markdown>{job.description}</Markdown>
			</Text>
		</StyledPosition>
	);
};

export { Position };
