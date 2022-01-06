import { Input, InputProps } from './Input';

export default {
	title: 'atoms/Input',
	component: Input,
};

export const InputStory = (args: InputProps) => <Input {...args} />;

InputStory.storyName = 'Input';
InputStory.args = {
	label: 'Input field',
	placeholder: 'Input field placeholder',
	id: 'some-id',
	type: 'text',
};
