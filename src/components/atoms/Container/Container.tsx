import { FC, ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
	return <div className="mx-auto w-full px-4 md:max-w-5xl">{children}</div>;
};

export { Container };
