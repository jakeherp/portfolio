import styled from 'styled-components';

const StyledNavigation = styled.nav``;

const List = styled.ul`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-size: 2rem;
	line-height: 2;
	font-weight: bold;

	.desktop-only {
		display: none;
	}

	& > li a {
		padding: 0.5rem 1rem;
		color: ${({ theme }) => theme.text};
		text-decoration: none;
		transition: 0.2s;

		&:hover {
			color: ${({ theme }) => theme.headline};
		}
	}

	@media screen and (min-width: 768px) {
		flex-direction: row;
		font-size: 1rem;
		font-weight: normal;

		.desktop-only {
			display: block;
		}
	}
`;

export { StyledNavigation, List };
