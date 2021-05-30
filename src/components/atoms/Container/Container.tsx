import { FC } from 'react';
import { StyledContainer } from './styles';

const Container: FC = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export { Container };
