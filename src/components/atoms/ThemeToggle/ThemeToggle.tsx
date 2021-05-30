import { FC } from 'react';
import { StyledThemeToggle } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from 'Redux/selectors';

import Light from 'Public/assets/light.svg';
import Dark from 'Public/assets/dark.svg';
import { setTheme } from 'Redux/actions/theme';

const ThemeToggle: FC = () => {
	const theme = useSelector(getTheme);
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
	};

	return (
		<StyledThemeToggle onClick={handleToggle}>
			{theme === 'light' ? <Dark /> : <Light />}
		</StyledThemeToggle>
	);
};

export { ThemeToggle };
