import styled from 'styled-components';

const StyledSocialIcons = styled.ul`
	display: flex;

	li {
		width: 1.5rem;
		margin: 0 0.5rem;
	}

	a {
		color: ${({ theme }) => theme.text};
		text-decoration: none;
		transition: 0.2s;

		&:hover {
			color: ${({ theme }) => theme.headline};
		}
	}

	@media screen and (min-width: 768px) {
		li {
			margin-left: 1rem;
		}
	}
`;

export { StyledSocialIcons };
