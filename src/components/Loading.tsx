import { HTMLAttributes } from 'react';

export default function Loading({
	className,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
	return (
		<div className="flex h-screen items-center justify-center">
			<div
				{...props}
				className={`${className} border-t-primary h-10 w-10 animate-spin rounded-full border-4 border-gray-300`}
			></div>
		</div>
	);
}
