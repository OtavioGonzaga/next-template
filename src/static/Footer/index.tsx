export function Footer() {
	return (
		<footer className="w-full h-20 bg-white dark:bg-gray-900 transition duration-300 rounded-4xl mt-5 shadow-md">
			<p className="p-6 text-center text-gray-400 dark:text-gray-300">
				&copy;2023 - {new Date().getFullYear()}{' '}
				<a
					className="text-secondary"
					href={'https://www.example.com'}
					target="_blank"
				>
					Your Website
				</a>
				. All rights reserved.
			</p>
		</footer>
	);
}
