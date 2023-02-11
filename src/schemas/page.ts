import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'page',
	title: 'Page',
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
			name: 'seoDescription',
			title: 'SEO description',
			type: 'string',
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		}),
	],

	preview: {
		select: {
			title: 'title',
			slug: 'slug.current',
		},
		prepare(selection) {
			const { slug } = selection;
			return { ...selection, subtitle: `/${slug}` };
		},
	},
});
