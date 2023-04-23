/* eslint-disable import/no-anonymous-default-export */
import { Select, SelectProps } from './Select';

import { withFormik } from 'formik';

export default {
	title: 'atoms/Select',
	component: Select,
};

export const SelectStory = (args: SelectProps) => <Select {...args} />;

SelectStory.storyName = 'Select';
SelectStory.decorators = [withFormik];
SelectStory.args = {
	label: 'Some select',
	id: 'some-select',
	options: ['Option 1', 'Option 2', 'Option 3'],
};
