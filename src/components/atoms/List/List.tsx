import { FC } from 'react';
import { StyledList } from './styles';

const List: FC = ({ children }) => {
	return <StyledList>{children}</StyledList>;
};

export { List };
