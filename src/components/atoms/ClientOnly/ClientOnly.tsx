import { FC, useEffect, useState } from 'react';

export const ClientOnly: FC = ({ children, ...delegated }) => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return null;
	}

	return <div {...delegated}>{children}</div>;
};
