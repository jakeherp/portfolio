import classNames from 'classnames';
import { Field, useField } from 'formik';

export interface TextAreaProps {
	label: string;
	placeholder?: string;
	id: string;
}

export const TextArea = ({ label, placeholder, id }: TextAreaProps) => {
	const fieldProps = { label, id, name: id, placeholder };
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, meta] = useField(fieldProps);

	return (
		<label htmlFor="firstName" className="mb-2 mt-6 flex flex-col font-bold">
			{label}
			<Field
				as="textarea"
				placeholder={placeholder}
				name={id}
				id={id}
				className={classNames(
					'my-2 rounded-md px-4 py-2 ring-1 dark:bg-transparent',
					{
						'ring-red-600': meta.touched && meta.error,
						'ring-grey-400 dark:ring-slate-500': !meta.touched || !meta.error,
					}
				)}
				rows={5}
			/>
			<div className="font-sm font-normal text-red-600">
				{meta.touched && meta.error}
			</div>
		</label>
	);
};
