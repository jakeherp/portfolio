import { SET_THEME } from 'Redux/actionTypes';

export const setTheme = (payload: 'light' | 'dark') => ({
	type: SET_THEME,
	payload,
});
