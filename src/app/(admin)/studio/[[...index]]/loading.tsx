'use client';

import config from '@root/sanity.config';
import { NextStudioLoading } from 'next-sanity/studio/loading';

export default function Loading() {
	return <NextStudioLoading config={config} />;
}
