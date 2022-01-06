import classNames from 'classnames';
import { Field, useField } from 'formik';

export interface InputProps {
	label: string;
	placeholder?: string;
	id: string;
	type?: 'text' | 'number' | 'password' | 'email' | 'tel';
}

export const Input = ({
	label,
	placeholder,
	id,
	type = 'text',
}: InputProps) => {
	const fieldProps = { label, id, name: id, placeholder, type };
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, meta] = useField(fieldProps);

	return (
		<label htmlFor="firstName" className="flex flex-col font-bold mb-2 mt-6">
			{label}
			<Field
				placeholder={placeholder}
				name={id}
				id={id}
				type={type}
				className={classNames(
					'px-4 py-2 rounded-md my-2 ring-1 ring-grey-400 dark:ring-grey-700',
					{
						'ring-red-600': meta.touched && meta.error,
					}
				)}
			/>
			<div className="font-sm font-normal text-red-600">
				{meta.touched && meta.error}
			</div>
		</label>
	);
};
