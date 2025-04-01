import { HTMLAttributes } from 'react';

export default function Loading({
	className,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement> & { size?: number | string }>) {
	return (
		<div className="flex items-center justify-center">
			<div
				{...props}
				style={{
					width: props.size ?? 40,
					height: props.size ?? 40,
				}}
				className={`border-t-primary animate-spin rounded-full border-4 border-gray-300 ${className}`}
			></div>
		</div>
	);
}
