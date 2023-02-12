import { isBrowser } from '../isBrowser';

describe('isBrowser', () => {
	it('returns true if environment is not node', () => {
		expect(isBrowser()).toEqual(true);
	});

	it('returns false if environment is node', () => {
		// @ts-expect-error not a browser
		delete global.window;

		expect(isBrowser()).toEqual(false);
	});
});
