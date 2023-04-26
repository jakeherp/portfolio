import classNames from 'classnames';

export interface SelectProps {
	label: string;
	id: string;
	isRequired?: boolean;
	error?: string;
	placeholder?: string;
	[rest: string]: unknown;
	options: Array<{
		value: string;
		label: string;
	}>;
}

export const Select = ({
	label,
	id,
	isRequired,
	error,
	options,
	placeholder,
	...rest
}: SelectProps) => {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={id} className="font-bold">
				{label} {isRequired && <span className="text-red-700">*</span>}
			</label>
			<select
				id="subject"
				className={classNames(
					'my-2 rounded-md px-4 py-2 ring-1 dark:bg-transparent',
					{
						'ring-red-600': !!error,
						'ring-grey-400 dark:ring-slate-500': !error,
					}
				)}
				{...rest}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
			{error && (
				<div className="font-sm font-normal -mt-2 text-red-600">{error}</div>
			)}
		</div>
	);
};
