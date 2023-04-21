import { useOnKeyDown } from '../useOnKeyDown';

import { fireEvent } from '@testing-library/dom';
import { renderHook } from '@testing-library/react';

jest.spyOn(console, 'error').mockImplementation(() => {
	// TODO: fix react hooks test throwing an error with React 18
});

describe('useOnKeyDown', () => {
	it('calls handler on key down', () => {
		const key = 'Escape';
		const handler = jest.fn();
		renderHook(() => useOnKeyDown(key, handler));

		fireEvent.keyDown(window, { key });
		expect(handler).toHaveBeenCalled();
	});
});
