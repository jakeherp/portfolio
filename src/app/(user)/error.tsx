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
	const { error, reset } = props;
	await Sentry.captureUnderscoreErrorException(
		props as unknown as NextPageContext
	);

	return <ErrorFallback error={error} reset={reset} />;
};

export default Error;
