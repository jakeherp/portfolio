/* eslint-disable import/no-anonymous-default-export */
import { Salary, SalaryProps } from './Salary';

export default {
	title: 'molecules/Salary',
	component: Salary,
};

export const SalaryStory = (args: SalaryProps) => <Salary {...args} />;

SalaryStory.storyName = 'Salary';
SalaryStory.args = {
	salaryRange: {
		minimum: 100000,
		median: 150000,
		maximum: 200000,
	},
};
