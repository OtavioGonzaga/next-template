import { HTMLAttributes } from 'react';

export default function Loading({
	className,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
	return (
		<div className="flex justify-center items-center h-screen">
			<div
				{...props}
				className={`${className} w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin`}
			></div>
		</div>
	);
}
