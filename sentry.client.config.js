// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN;

Sentry.init({
	dsn:
		SENTRY_DSN ||
		'https://60777b40fa4e4b009ee06b34589f2139@o1111192.ingest.sentry.io/6140295',
	tracesSampleRate: 1.0,
});
