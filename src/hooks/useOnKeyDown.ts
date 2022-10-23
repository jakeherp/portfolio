import { useEffect } from 'react';

export const useOnKeyDown = (
	key: KeyboardEvent['key'],
	handler: () => void
) => {
	useEffect(() => {
		const callHandlerOnKeyDown = (e: KeyboardEvent) => {
			if (e.key === key) {
				handler();
			}
		};
		window.addEventListener('keydown', callHandlerOnKeyDown);

		return () => window.removeEventListener('keydown', callHandlerOnKeyDown);
	}, [handler, key]);
};
