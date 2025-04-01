export function Card({
	children,
}: Readonly<{
	children?: React.ReactNode;
}>) {
	return (
		<div className="w-full rounded-4xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 dark:border-gray-700 dark:bg-gray-900">
			{children}
		</div>
	);
}
