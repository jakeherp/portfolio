import classNames from 'classnames';
import { IEducation } from '@types';

import { School } from 'Molecules/School';

export interface EducationProps {
	education: IEducation[];
}

const Education = ({ education }: EducationProps) => {
	return (
		<>
			{education.map(
				({ course, date, institute, technologies }, index: number) => (
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
							institute={institute}
							technologies={technologies}
						/>
					</div>
				)
			)}
		</>
	);
};

export { Education };
