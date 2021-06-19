import { StyledThemeToggle } from './styles';

import { getTheme } from 'Redux/selectors';
import { setTheme } from 'Redux/actions/theme';
import { useDispatch, useSelector } from 'react-redux';

import Dark from 'Public/assets/dark.svg';
import Light from 'Public/assets/light.svg';

const ThemeToggle = () => {
	const theme = useSelector(getTheme);
	const dispatch = useDispatch();

	const lightTheme = theme === 'light';

	const handleToggle = () => {
		dispatch(setTheme(lightTheme ? 'dark' : 'light'));
	};

	return (
		<StyledThemeToggle
			onClick={handleToggle}
			title={`Switch to ${lightTheme ? 'dark' : 'light'} theme`}
		>
			{lightTheme ? <Dark /> : <Light />}
		</StyledThemeToggle>
	);
};

export { ThemeToggle };
