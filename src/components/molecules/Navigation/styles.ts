import styled from 'styled-components';

const StyledNavigation = styled.nav``;

const List = styled.ul`
	display: flex;
	align-items: center;

	& > li a {
		padding: 0.5rem 1rem;
		color: ${({ theme }) => theme.text};
		text-decoration: none;
		transition: 0.2s;

		&:hover {
			color: ${({ theme }) => theme.headline};
		}
	}
`;

export { StyledNavigation, List };
