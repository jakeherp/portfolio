import { StudioLogo } from '@components/atoms/Logo';

import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@schemas';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default defineConfig({
	name: 'portfolio-content-studio',
	basePath: '/studio',
	title: 'Portfolio Content Studio',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	plugins: [deskTool(), visionTool()],
	schema: {
		types: schemaTypes,
	},
	studio: {
		components: {
			logo: StudioLogo,
		},
	},
});
