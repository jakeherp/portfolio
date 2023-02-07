import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'job',
	title: 'Job',
	type: 'document',
	fields: [
		defineField({
			name: 'company',
			title: 'Company',
			type: 'reference',
			to: [{ type: 'company' }],
		}),
		defineField({
			name: 'jobTitle',
			title: 'Job Title',
			type: 'string',
		}),
		defineField({
			name: 'fromDate',
			title: 'From date',
			type: 'date',
		}),
		defineField({
			name: 'toDate',
			title: 'To Date',
			type: 'date',
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
			name: 'description',
			title: 'Description',
			type: 'blockContent',
		}),
	],

	preview: {
		select: {
			title: 'jobTitle',
			company: 'company.name',
			media: 'company.logo',
		},
		prepare(selection) {
			const { company } = selection;
			return { ...selection, subtitle: company };
		},
	},
});
