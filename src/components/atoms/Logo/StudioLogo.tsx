import { Logo } from './Logo';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StudioLogo = ({ renderDefault, ...props }: any) => (
	<div className="flex items-center">
		<Logo hideName />
		{renderDefault(props)}
	</div>
);
