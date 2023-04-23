import { Box } from '@components/atoms/Box';

import type { Job as JobType } from '@types';
import { format } from 'date-fns';
import Image from 'next/image';
import type { FC, PropsWithChildren, ReactNode } from 'react';

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
		<Box className="mt-12 w-full">
			{company.logo && (
				<div className="-mt-12 mb-4 flex w-full justify-center">
					<Image
						src={company.logo}
						alt={company.name}
						width={64}
						height={64}
						className="rounded-md"
					/>
				</div>
			)}
			<div className="flex items-start gap-4 md:items-center">
				<div className="mb-2 w-full">
					<h3 className="text-center font-bold">{jobTitle}</h3>
					<h4 className="text-center">
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

					<p className="mb-4 text-center text-sm text-slate-500">
						{`${format(new Date(fromDate), 'MMM yyyy')} — ${
							toDate ? format(new Date(toDate), 'MMM yyyy') : 'present'
						}`}
					</p>

					<p className="hidden text-sm md:block md:text-base">
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
