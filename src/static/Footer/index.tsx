import { useTranslations } from 'next-intl';

export function Footer() {
	const t = useTranslations();

	return (
		<footer className="mt-5 h-20 w-full rounded-4xl bg-white shadow-md transition duration-300 dark:bg-gray-900">
			<p className="p-6 text-center text-gray-400 dark:text-gray-300">
				&copy;2023 - {new Date().getFullYear()}{' '}
				<a
					className="text-secondary"
					href={'https://www.example.com'}
					target="_blank"
				>
					Your Website
				</a>
				. {t('allRights')}
			</p>
		</footer>
	);
}
