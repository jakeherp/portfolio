import { FC } from 'react';
import { format } from 'date-fns';
import { IEducation } from '@Types';
import { Flex, StyledEducation } from './styles';

export interface EducationProps {
	education: IEducation;
}

const Education: FC<EducationProps> = ({ education }) => {
	return (
		<StyledEducation>
			<Flex>
				<div>
					<strong>
						{education.website ? (
							<a
								href={education.website}
								target="_blank"
								rel="noopener noreferrer"
							>
								{education.course}
							</a>
						) : (
							education.course
						)}
					</strong>{' '}
					- {education.institute}
				</div>
				<div>{format(new Date(education.endDate), 'MM/yyyy')}</div>
			</Flex>
			<small>
				<em>
					<strong>Course contents:</strong> {education.technologies.join(', ')}
				</em>
			</small>
		</StyledEducation>
	);
};

export { Education };
