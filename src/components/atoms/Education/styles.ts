import styled from 'styled-components';

const StyledEducation = styled.div`
	margin-bottom: 3rem;
`;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 0.5rem;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export { Flex, StyledEducation };
