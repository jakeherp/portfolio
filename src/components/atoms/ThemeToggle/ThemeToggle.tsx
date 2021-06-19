import { StyledThemeToggle } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from 'Redux/selectors';

import Light from 'Public/assets/light.svg';
import Dark from 'Public/assets/dark.svg';
import { setTheme } from 'Redux/actions/theme';

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
