import styled from 'styled-components';

const StyledPortfolioItem = styled.article`
	margin-bottom: 3rem;
	flex-direction: column;

	a {
		color: ${({ theme }) => theme.headline} !important;
		text-decoration: none;
	}

	h1 {
		margin: 0;
	}

	p {
		margin: 0;
	}

	.type {
		margin-bottom: 1rem;
		font-weight: bold;
	}

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;

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
	}
`;

export { StyledPortfolioItem };
