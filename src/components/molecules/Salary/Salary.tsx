'use client';

import { useEffect, useState } from 'react';

export interface SalaryProps {
	salaryRange: {
		minimum: number;
		median: number;
		maximum: number;
	};
}

const Salary = ({ salaryRange }: SalaryProps) => {
	const { median } = salaryRange;

	const roundNum = (num: number) => {
		return Math.round(num / 5000) * 5000;
	};

	const minVisible = roundNum(median * 0.5);
	const maxVisible = roundNum(median * 1.6);
	const minSad = roundNum(median * 0.6);
	const stillSad = roundNum(median * 0.7);
	const minAcceptable = roundNum(median * 0.8);
	const veryHappy = roundNum(median * 1.2);
	const overTheMoon = roundNum(median * 1.4);

	const [selectedSalary, setSelectedSalary] = useState(minAcceptable);
	const [emoji, setEmoji] = useState('❓');
	const [title, setTitle] = useState('❓');

	useEffect(() => {
		if (selectedSalary < minSad) {
			setEmoji('🤬');
			setTitle('Are you serious?');
		} else if (selectedSalary >= minSad && selectedSalary < stillSad) {
			setEmoji('😭');
			setTitle('Way too low');
		} else if (selectedSalary >= stillSad && selectedSalary < minAcceptable) {
			setEmoji('😢');
			setTitle('Too low');
		} else if (selectedSalary >= minAcceptable && selectedSalary < median) {
			setEmoji('😏');
			setTitle('getting there');
		} else if (selectedSalary >= median && selectedSalary < veryHappy) {
			setEmoji('🙂');
			setTitle('pretty good');
		} else if (selectedSalary >= veryHappy && selectedSalary < overTheMoon) {
			setEmoji('😀');
			setTitle('even better');
		} else if (selectedSalary >= overTheMoon && selectedSalary < maxVisible) {
			setEmoji('😃');
			setTitle('amazing');
		} else if (selectedSalary >= maxVisible) {
			setEmoji('🤑');
			setTitle('make it rain!');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedSalary]);

	return (
		<div>
			<p>
				<strong>Salary Expectation: </strong>
				There are several factors that influence the salary expectation I have
				for a future role, but here&lsquo;s a good approximation (please
				don&lsquo;t make me cry):
			</p>
			<input
				type="range"
				min={minVisible}
				max={maxVisible}
				value={selectedSalary}
				step={5_000}
				onChange={(e) => setSelectedSalary(Number(e.target.value))}
				className="mx-2"
				data-testid="salaryRange"
			/>
			<label htmlFor="salaryRange">
				{Intl.NumberFormat('en-GB', {
					style: 'currency',
					currency: 'GBP',
				}).format(selectedSalary)}
			</label>
			<p>
				<strong>Happiness Score:</strong>
				<span className="text-3xl" data-testid="emoji" title={title}>
					{` ${emoji}`}
				</span>
			</p>
		</div>
	);
};

export { Salary };
