import { sanityClient } from '@lib/sanity';

import { salaryQuery } from '@queries/salary';

import type { Salary } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

const salaryApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const salary: Salary = await sanityClient.fetch(salaryQuery);

	return res.status(200).json(salary);
};

export default salaryApi;
