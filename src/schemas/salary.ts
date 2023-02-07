import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'salary',
	title: 'Salary',
	type: 'document',
	fields: [
		defineField({
			name: 'minimum',
			title: 'Minimum',
			type: 'number',
		}),
		defineField({
			name: 'median',
			title: 'Median',
			type: 'number',
		}),
		defineField({
			name: 'maximum',
			title: 'Maximum',
			type: 'number',
		}),
	],
});
