import styled from 'styled-components';

const StyledThemeToggle = styled.button`
	background: transparent;
	border: 1px solid ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.text};
	border-radius: 3px;
	width: 2rem;
	height: 2rem;
	transition: 0.2s;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.headline};
	}
`;

export { StyledThemeToggle };
