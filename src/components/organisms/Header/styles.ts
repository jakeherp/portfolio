import styled from 'styled-components';

const Flex = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		color: ${({ theme }) => theme.text};
		text-decoration: none;
		transition: 0.2s;

		&:hover {
			color: ${({ theme }) => theme.headline};
		}
	}
`;

export { Flex };
