import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import { SET_THEME } from '../actionTypes';

export const initialState: IThemeState = {
	currentTheme: 'light',
};

export type IThemeState = {
	currentTheme: 'light' | 'dark';
};

const theme = (state: IThemeState = initialState, action: AnyAction) => {
	switch (action.type) {
		case HYDRATE:
			if (action.payload.app === 'init') delete action.payload.app;
			if (action.payload.page === 'init') delete action.payload.page;
			return { ...state, ...action.payload };

		case SET_THEME:
			return {
				...state,
				currentTheme: action.payload,
			};

		default:
			return state;
	}
};

export default theme;
