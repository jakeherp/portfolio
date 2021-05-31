import styled from 'styled-components';

const Flex = styled.div`
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

const Desktop = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: block;
	}
`;

const Mobile = styled.div`
	display: block;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export { Desktop, Mobile, Flex };
