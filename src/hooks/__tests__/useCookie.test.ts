import { stringifyOptions, useCookie } from '../useCookie';

import { act, renderHook } from '@testing-library/react';

describe('stringifyOptions', () => {
	it('should exclude the days param', () => {
		expect(
			stringifyOptions({
				days: 10,
				path: '/',
			})
		).toEqual('; path=/');
	});

	it('should stringify any extra cookie options', () => {
		expect(
			stringifyOptions({
				days: 7,
				path: '/test',
				SameSite: 'Lax',
				Secure: true,
				HttpOnly: false,
			})
		).toEqual('; path=/test; SameSite=Lax; Secure');
	});
});

describe('useCookie', () => {
	it('returns the initialState', () => {
		const initialState = 'initial value';

		const { result } = renderHook(() => useCookie('myCookie', initialState));

		expect(result.current[0]).toEqual(initialState);
	});

	it('returns a setValue function that can reset local storage', () => {
		const key = 'myCookie';
		const initialState = 'initial value';

		const { result } = renderHook(() => useCookie(key, initialState));

		const newValue = 'new value';
		act(() => {
			result.current[1](newValue);
		});
		expect(result.current[0]).toEqual(newValue);
	});
});
