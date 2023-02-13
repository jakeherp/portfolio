'use client';

import { ErrorFallback } from '@components/templates/ErrorFallback';

import * as Sentry from '@sentry/nextjs';
import { NextPageContext } from 'next';

interface ErrorProps {
	error: {
		message: string;
		status: number;
	};
	reset: () => void;
}

const Error = async (props: ErrorProps) => {
	await Sentry.captureUnderscoreErrorException(
		props as unknown as NextPageContext
	);

	return <ErrorFallback error={props?.error} reset={props?.reset} />;
};

export default Error;
