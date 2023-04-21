import { StudioLogo } from '@components/atoms/Logo';

import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@schemas';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

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
	plugins: [deskTool(), visionTool(), codeInput(), vercelDeployTool()],
	schema: {
		types: schemaTypes,
	},
	studio: {
		components: {
			logo: StudioLogo,
		},
	},
});
