import { IJob } from '@types';

import { format } from 'date-fns';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { Box } from 'Atoms/Box';

interface JobProps extends Omit<IJob, 'description'> {
	children?: ReactNode;
}

const Job: FC<JobProps> = ({
	company,
	jobTitle,
	fromDate,
	toDate,
	technologies,
	children,
}) => {
	return (
		<Box>
			<div className="flex gap-4 items-start md:items-center">
				{company.logo && (
					<Image
						src={company.logo}
						alt={company.name}
						width={64}
						height={64}
						className="rounded-md"
					/>
				)}
				<div className="w-full mb-2">
					<div className="flex flex-col-reverse md:flex-row justify-between">
						<h3 className="font-bold">{jobTitle}</h3>
						<span className="text-sm md:text-base">
							{`${format(new Date(fromDate), 'MMM yyyy')} — ${
								toDate ? format(new Date(toDate), 'MMM yyyy') : 'present'
							}`}
						</span>
					</div>
					<h4>
						{company.url ? (
							<a
								href={company.url}
								target="_blank"
								rel="noopener noreferrer"
								className="underlined relative"
							>
								{company.name}
							</a>
						) : (
							<>{company.name}</>
						)}
					</h4>
					<p className="hidden md:block text-sm">
						<strong>Technologies: </strong>
						{technologies.join(', ')}
					</p>
				</div>
			</div>
			<p className="md:hidden text-sm">
				<strong>Technologies: </strong>
				{technologies.join(', ')}
			</p>
			{children}
		</Box>
	);
};

export { Job };
