import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'education',
	title: 'Education',
	type: 'document',
	fields: [
		defineField({
			name: 'course',
			title: 'Course',
			type: 'string',
		}),
		defineField({
			name: 'courseContents',
			title: 'Course Contents',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'skill' }],
				},
			],
		}),
		defineField({
			name: 'date',
			title: 'Date',
			type: 'date',
		}),
		defineField({
			name: 'institution',
			title: 'Institution',
			type: 'reference',
			to: [{ type: 'company' }],
		}),
	],

	preview: {
		select: {
			title: 'course',
			company: 'institution.name',
			media: 'institution.logo',
		},
		prepare(selection) {
			const { company } = selection;
			return { ...selection, subtitle: company };
		},
	},
});
