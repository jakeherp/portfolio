/* eslint-disable import/no-anonymous-default-export */
import { Input, InputProps } from './Input';

import { withFormik } from 'formik';

export default {
	title: 'atoms/Input',
	component: Input,
};

export const InputStory = (args: InputProps) => <Input {...args} />;

InputStory.storyName = 'Input';
InputStory.decorators = [withFormik];
InputStory.args = {
	label: 'Input field',
	placeholder: 'Input field placeholder',
	id: 'some-id',
	type: 'text',
};
