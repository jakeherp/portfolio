import { Select, SelectProps } from './Select';

export default {
	title: 'atoms/Select',
	component: Select,
};

export const SelectStory = (args: SelectProps) => <Select {...args} />;

SelectStory.storyName = 'Select';
SelectStory.args = {
	label: 'Some select',
	id: 'some-select',
	options: ['Option 1', 'Option 2', 'Option 3'],
};
