'use client';

import config from '@root/sanity.config';
import { NextStudio } from 'next-sanity/studio';

export default function StudioPage() {
	return <NextStudio config={config} />;
}
