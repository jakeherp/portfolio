import styled from 'styled-components';

const StyledSocialIcons = styled.ul`
	display: flex;

	li {
		width: 1.5rem;
		margin-left: 1rem;
	}

	a {
		padding: 0.5rem 1rem;
		color: ${({ theme }) => theme.text};
		text-decoration: none;
		transition: 0.2s;

		&:hover {
			color: ${({ theme }) => theme.headline};
		}
	}
`;

export { StyledSocialIcons };
