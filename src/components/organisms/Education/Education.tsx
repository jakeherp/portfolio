import { School } from '@components/molecules/School';

import { Education as EducationType } from '@types';
import classNames from 'classnames';

export interface EducationProps {
	education: EducationType[];
}

const Education = ({ education }: EducationProps) => {
	return (
		<>
			{education.map(
				({ course, date, institution, courseContents }, index: number) => (
					<div
						className={classNames(
							'flex transition-all transform md:hover:scale-[1.01]',
							{
								'justify-end': index % 2 !== 0,
							}
						)}
						key={course}
					>
						<School
							course={course}
							date={date}
							institution={institution}
							courseContents={courseContents}
						/>
					</div>
				)
			)}
		</>
	);
};

export { Education };
