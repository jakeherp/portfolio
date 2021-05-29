import { IState } from './store';

export const getTheme = ({ theme }: IState) => theme.currentTheme;
