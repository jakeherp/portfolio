import { RecruiterForm, RecruiterFormProps } from './RecruiterForm';

export default {
	title: 'molecules/RecruiterForm',
	component: RecruiterForm,
};

export const RecruiterFormStory = (args: RecruiterFormProps) => (
	<RecruiterForm {...args} />
);

RecruiterFormStory.storyName = 'RecruiterForm';
RecruiterFormStory.args = {
	handleSubmit: () => console.log('Submitted'),
	success: false,
	error: false,
};
