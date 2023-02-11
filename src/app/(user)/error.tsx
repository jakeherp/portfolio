'use client';

import { ErrorFallback } from '@components/templates/ErrorFallback';

import { useEffect } from 'react';

interface ErrorProps {
	error: {
		message: string;
		status: number;
	};
	reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
	useEffect(() => {
		console.log('logging error:', error);
	}, [error]);

	return <ErrorFallback error={error} reset={reset} />;
};

export default Error;
