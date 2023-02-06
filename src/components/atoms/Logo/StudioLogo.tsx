import { Logo } from './Logo';

export const StudioLogo = ({ renderDefault, ...props }: any) => (
	<div className="flex items-center">
		<Logo hideName />
		{renderDefault(props)}
	</div>
);
