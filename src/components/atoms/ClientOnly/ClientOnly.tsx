import { FC, ReactNode, useEffect, useState } from 'react';

interface ClientOnlyProps {
	children: ReactNode;
}

export const ClientOnly: FC<ClientOnlyProps> = ({ children, ...delegated }) => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return null;
	}

	return <div {...delegated}>{children}</div>;
};
