import { SET_THEME } from 'Redux/actionTypes';
import theme, { IThemeState } from './theme';

const initialState: IThemeState = {
	currentTheme: 'light',
};

describe('Redux Reducers: Theme', () => {
	it('handles SET_THEME', () => {
		const action = {
			type: SET_THEME,
			payload: 'dark',
		};

		expect(theme(initialState, action)).toEqual({
			...initialState,
			currentTheme: 'dark',
		});
	});
});
