import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'skill',
	title: 'Skill',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'reference',
			to: { type: 'category' },
		}),
	],
});
