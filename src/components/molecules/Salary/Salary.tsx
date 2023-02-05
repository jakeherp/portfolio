import { useEffect, useState } from 'react';

export interface SalaryProps {
	salaryRange: {
		minimum: number;
		median: number;
		maximum: number;
	};
}

const Salary = ({ salaryRange }: SalaryProps) => {
	const [selectedSalary, setSelectedSalary] = useState(
		salaryRange.minimum - 40_000
	);
	const [emoji, setEmoji] = useState('❓');
	const [textContent, setTextContent] = useState('unknown');

	const { minimum, median, maximum } = salaryRange;

	useEffect(() => {
		if (selectedSalary <= minimum - 30_000) {
			setEmoji('😭');
			setTextContent('way too low');
		} else if (
			selectedSalary > minimum - 30_000 &&
			selectedSalary <= minimum - 20_000
		) {
			setEmoji('😢');
			setTextContent('too low');
		} else if (
			selectedSalary > minimum - 20_000 &&
			selectedSalary <= minimum - 10_000
		) {
			setEmoji('🙁');
			setTextContent('low');
		} else if (selectedSalary > minimum - 10_000 && selectedSalary < minimum) {
			setEmoji('😕');
			setTextContent('you can do better');
		} else if (selectedSalary >= minimum && selectedSalary < minimum + 10_000) {
			setEmoji('😏');
			setTextContent('getting there');
		} else if (
			selectedSalary > minimum + 10_000 &&
			selectedSalary <= minimum + 20_000
		) {
			setEmoji('🙂');
			setTextContent('pretty good');
		} else if (
			selectedSalary > minimum + 20_000 &&
			selectedSalary <= median + 20_000
		) {
			setEmoji('😀');
			setTextContent('great');
		} else if (selectedSalary >= maximum) {
			setEmoji('🤑');
			setTextContent('make it rain!');
		}
	}, [maximum, median, minimum, selectedSalary]);

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
				min={minimum - 40_000}
				max={maximum + 50_000}
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
				<span className="text-3xl" data-testid="emoji" title={textContent}>
					{` ${emoji}`}
				</span>
			</p>
		</div>
	);
};

export { Salary };
