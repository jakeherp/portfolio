import { Button } from '@components/atoms/Button';
import { Container } from '@components/atoms/Container';

interface ErrorFallbackProps {
	error?: {
		message: string;
		status: number;
	};
	reset?: () => void;
}

export const ErrorFallback = ({ error, reset }: ErrorFallbackProps) => {
	return (
		<Container>
			<h1 className="headline mt-8 pb-4 text-3xl md:text-4xl lg:text-5xl">
				{error ? `Error ${error.status}` : 'Something went wrong'}
			</h1>
			<p className="text-lg">
				{error ? `Error code: ${error.message}` : 'Please try again later'}
			</p>
			{reset && <Button onClick={reset}>Try again</Button>}
		</Container>
	);
};
