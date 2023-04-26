import classNames from 'classnames';

export interface InputProps {
	label: string;
	id: string;
	isRequired?: boolean;
	error?: string;
	[rest: string]: unknown;
}

export const Input = ({
	label,
	id,
	isRequired,
	error,
	...rest
}: InputProps) => {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={id} className="font-bold">
				{label} {isRequired && <span className="text-red-700">*</span>}
			</label>
			<input
				id={id}
				className={classNames(
					'my-2 rounded-md px-4 py-2 ring-1 dark:bg-transparent',
					{
						'ring-red-600': !!error,
						'ring-grey-400 dark:ring-slate-500': !error,
					}
				)}
				{...rest}
			/>
			{error && (
				<div className="font-sm font-normal -mt-2 text-red-600">{error}</div>
			)}
		</div>
	);
};
