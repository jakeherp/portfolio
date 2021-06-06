import styled from 'styled-components';

const StyledPortfolioItem = styled.article`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	margin-bottom: 3rem;

	a {
		color: ${({ theme }) => theme.headline} !important;
		text-decoration: none;
	}

	&:nth-of-type(odd) {
		flex-direction: row;

		.details {
			padding-left: 1rem;
		}
	}

	&:nth-of-type(even) {
		.details {
			padding-right: 1rem;
		}
	}

	& > * {
		width: 50%;
	}

	h1 {
		margin-bottom: 0;
	}

	p {
		margin: 0;
	}

	.type {
		margin-bottom: 1rem;
		font-weight: bold;
	}
`;

export { StyledPortfolioItem };
