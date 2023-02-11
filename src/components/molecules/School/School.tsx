import { Box } from '@components/atoms/Box';

import { Company } from '@types';
import format from 'date-fns/format';
import Image from 'next/image';

export interface SchoolProps {
	institution: Company;
	course: string;
	date: string;
	courseContents: string[];
}

const School = ({ institution, course, date, courseContents }: SchoolProps) => {
	return (
		<Box>
			<div className="flex gap-4 items-center">
				{institution.logo && (
					<Image
						src={institution.logo}
						alt={institution.name}
						width={64}
						height={64}
						className="rounded-md"
					/>
				)}
				<div className="w-full mb-2">
					<div className="flex justify-between">
						<h3 className="font-bold">{course}</h3>
						<span>{format(new Date(date), 'MMM yyyy')}</span>
					</div>
					<h4>
						{institution.url ? (
							<a
								href={institution.url}
								target="_blank"
								rel="noopener noreferrer"
								className="underlined relative"
							>
								{institution.name}
							</a>
						) : (
							<>{institution.name}</>
						)}
					</h4>
					<p className="text-sm">
						<strong>Course Contents: </strong>
						{courseContents.join(', ')}
					</p>
				</div>
			</div>
		</Box>
	);
};

export { School };
