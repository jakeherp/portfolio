import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
	return <div className="mx-auto w-full px-4 md:max-w-5xl">{children}</div>;
};
