import { StudioLogo } from '@components/atoms/Logo';

import { codeInput } from '@sanity/code-input';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@schemas';
import { defineConfig } from 'sanity';
import { StructureBuilder, deskTool } from 'sanity/desk';

export default defineConfig({
	name: 'portfolio-content-studio',
	basePath: '/studio',
	title: 'Portfolio Content Studio',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	decorators: [
		{ title: 'Strong', value: 'strong' },
		{ title: 'Emphasis', value: 'em' },
		{ title: 'Code', value: 'code' },
		{ title: 'Underline', value: 'underline' },
		{ title: 'Strike', value: 'strike-through' },
	],
	plugins: [
		deskTool(),
		// deskTool({
		// 	structure: (S, context) => {
		// 		return S.list()
		// 			.title('Content')
		// 			.items([
		// 				orderableDocumentListDeskItem({ type: 'category', S, context }),
		// 			]);
		// 	},
		// }),
		visionTool(),
		codeInput(),
	],
	schema: {
		types: schemaTypes,
	},
	studio: {
		components: {
			logo: StudioLogo,
		},
	},
});
