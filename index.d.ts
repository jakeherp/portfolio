/* eslint-disable @typescript-eslint/ban-types */
import 'react';

declare module 'react' {
	export type FC<P = {}> = FunctionComponent<P>;
	export interface FunctionComponent<P = {}> {
		(props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
		propTypes?: WeakValidationMap<P> | undefined;
		contextTypes?: ValidationMap<any> | undefined;
		defaultProps?: Partial<P> | undefined;
		displayName?: string | undefined;
	}
}
