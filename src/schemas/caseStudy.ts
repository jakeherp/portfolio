import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'caseStudy',
	title: 'Case Study',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Project Title',
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
			name: 'client',
			title: 'Client',
			type: 'reference',
			to: [{ type: 'company' }],
		}),
		defineField({
			name: 'mainImage',
			title: 'Featured image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'secondaryImages',
			title: 'Secondary Images',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
		}),
		defineField({
			name: 'skills',
			title: 'Skills',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'skill' }],
				},
			],
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		}),
		defineField({
			name: 'seoDescription',
			title: 'SEO description',
			type: 'string',
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
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
			company: 'client.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { company } = selection;
			return { ...selection, subtitle: company };
		},
	},
});
