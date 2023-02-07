import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'company',
	title: 'Company',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'string',
		}),
		defineField({
			name: 'logo',
			title: 'Logo',
			type: 'image',
		}),
	],
});
