import { Box } from '@components/atoms/Box';

import { Job as JobType } from '@types';
import { format } from 'date-fns';
import Image from 'next/image';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface JobProps extends Omit<JobType, 'description'> {
	children?: ReactNode;
}

const Job: FC<PropsWithChildren<JobProps>> = ({
	company,
	jobTitle,
	fromDate,
	toDate,
	skills,
	children,
}) => {
	return (
		<Box>
			<div className="flex items-start gap-4 md:items-center">
				{company.logo && (
					<Image
						src={company.logo}
						alt={company.name}
						width={64}
						height={64}
						className="rounded-md"
					/>
				)}
				<div className="mb-2 w-full">
					<div className="flex flex-col-reverse justify-between md:flex-row">
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
					<p className="hidden text-sm md:block">
						<strong>Technologies: </strong>
						{skills.join(', ')}
					</p>
				</div>
			</div>
			<p className="text-sm md:hidden">
				<strong>Technologies: </strong>
				{skills.join(', ')}
			</p>
			{children}
		</Box>
	);
};

export { Job };
