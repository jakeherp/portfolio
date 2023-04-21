import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'service',
	title: 'Service',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
		}),
	],

	preview: {
		select: {
			title: 'title',
			subtitle: 'subtitle',
			media: 'image',
		},
		prepare(selection) {
			const { subtitle } = selection;
			return { ...selection, subtitle };
		},
	},
});
