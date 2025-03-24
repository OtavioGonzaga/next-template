'use client';

import { useTranslations } from 'next-intl';

export default function NotFound() {
	const t = useTranslations();

	return (
		<div className="flex items-center justify-center h-full">
			<div className="text-center">
				<h1 className="text-9xl font-bold mb-4">404</h1>
				<p className="text-gray-400">{t('errors.notFound')}</p>
			</div>
		</div>
	);
}
