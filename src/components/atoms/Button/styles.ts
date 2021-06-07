import styled from 'styled-components';

const StyledButton = styled.button`
	display: inline-block;
	margin: 2rem auto;
	border: 2px solid ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.text};
	padding: 0.5rem 3rem;
	border-radius: 5px;
	background: transparent;
`;

const StyledLink = styled.a`
	display: inline-block;
	margin: 2rem auto;
	border: 2px solid ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.text};
	padding: 0.5rem 3rem;
	border-radius: 5px;
	background: transparent;
	text-decoration: none;

	&:hover {
		border: 2px solid ${({ theme }) => theme.headline};
		color: ${({ theme }) => theme.headline};
	}
`;

export { StyledButton, StyledLink };
