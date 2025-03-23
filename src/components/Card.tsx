export function Card({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="max-w-full p-8 transition duration-300 bg-white border border-gray-200 rounded-4xl shadow-sm dark:bg-gray-900 dark:border-gray-700">
			{children}
		</div>
	);
}
