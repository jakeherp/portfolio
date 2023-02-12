import { isBrowser } from '@lib/isBrowser';

import { useState } from 'react';

interface CookieOptions {
	days?: number;
	path?: string;
	domain?: string;
	SameSite?: 'None' | 'Lax' | 'Strict';
	Secure?: boolean;
	HttpOnly?: boolean;
}

export function stringifyOptions(options: Record<string, unknown>) {
	return Object.keys(options).reduce((acc, key) => {
		if (key === 'days') {
			return acc;
		} else {
			if (options[key] === false) {
				return acc;
			} else if (options[key] === true) {
				return `${acc}; ${key}`;
			} else {
				return `${acc}; ${key}=${options[key]}`;
			}
		}
	}, '');
}

export const setCookie = (
	name: string,
	value: string,
	options: CookieOptions
) => {
	if (!isBrowser()) return;

	const optionsWithDefaults = {
		days: 7,
		path: '/',
		...options,
	};

	const expires = new Date(
		Date.now() + optionsWithDefaults.days * 864e5
	).toUTCString();

	document.cookie =
		name +
		'=' +
		encodeURIComponent(value) +
		'; expires=' +
		expires +
		stringifyOptions(optionsWithDefaults);
};

export const getCookie = (name: string, initialValue = '') => {
	return (
		(isBrowser() &&
			document.cookie.split('; ').reduce((r, v) => {
				const parts = v.split('=');
				return parts[0] === name ? decodeURIComponent(parts[1]) : r;
			}, '')) ||
		initialValue
	);
};

type ReturnType = [string, (value: string, options?: CookieOptions) => void];

export const useCookie = (key: string, initialValue?: string): ReturnType => {
	const [item, setItem] = useState(() => getCookie(key, initialValue));

	const updateItem = (value: string, options: CookieOptions = {}): void => {
		setItem(value);
		setCookie(key, value, options);
	};

	return [item, updateItem];
};
