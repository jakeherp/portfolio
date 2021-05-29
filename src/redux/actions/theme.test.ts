import { setTheme } from './theme';

describe('Redux Actions: Theme', () => {
	it('returns correct payload for setTheme action', () => {
		const action = setTheme('dark');
		expect(action.payload).toEqual('dark');
	});
});
