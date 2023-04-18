import classNames from 'classnames';
import { Field, useField } from 'formik';

export interface SelectProps {
	label: string;
	id: string;
	options: string[];
}

export const Select = ({ label, id, options }: SelectProps) => {
	const fieldProps = { label, id, name: id, options };
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, meta] = useField(fieldProps);

	return (
		<label htmlFor={id} className="mb-2 mt-6 flex flex-col font-bold">
			{label}
			<Field
				as="select"
				name={id}
				id={id}
				className={classNames(
					'my-2 rounded-md px-4 py-2 ring-1 dark:bg-transparent',
					{
						'ring-red-600': meta.touched && meta.error,
						'ring-grey-400 dark:ring-slate-500': !meta.touched || !meta.error,
					}
				)}
				defaultValue="none"
			>
				<option value="none">Please select</option>
				{options.map((option) => (
					<option value={option} key={option}>
						{option}
					</option>
				))}
			</Field>
			<div className="font-sm font-normal text-red-600">
				{meta.touched && meta.error}
			</div>
		</label>
	);
};
