import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'podcast',
	title: 'Podcast',
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
			type: 'url',
		}),
		defineField({
			name: 'logo',
			title: 'Logo',
			type: 'image',
		}),
		defineField({
			name: 'sortOrder',
			title: 'Sort Order',
			type: 'number',
		}),
	],
});
