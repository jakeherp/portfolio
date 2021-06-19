import { FC } from 'react';
import { Footer } from 'Organisms/Footer';
import { Header } from 'Organisms/Header';
import { StyledLayout } from './styles';

const Layout: FC = ({ children }) => {
	return (
		<StyledLayout>
			<Header />
			<main>{children}</main>
			<Footer />
		</StyledLayout>
	);
};

export { Layout };
