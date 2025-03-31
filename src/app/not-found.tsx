'use client';

import { useTranslations } from 'next-intl';

export default function NotFound() {
	const t = useTranslations();

	return (
		<div className="flex h-full items-center justify-center">
			<div className="text-center">
				<h1 className="mb-4 text-9xl font-bold">404</h1>
				<p className="text-gray-400">{t('errors.notFound')}</p>
			</div>
		</div>
	);
}
