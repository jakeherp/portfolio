import styled from 'styled-components';

const StyledPosition = styled.div``;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 0.5rem;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const Text = styled.div`
	margin: 0.5rem 0 3rem;

	ul {
		margin: 0;
		list-style: square;
		padding-left: 1rem;

		li {
			margin-bottom: 0.5rem;
		}
	}
`;

export { Flex, StyledPosition, Text };
