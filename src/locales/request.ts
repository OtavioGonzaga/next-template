import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
	const languages = ['en-US', 'pt-BR'] as const;

	const cookie = await cookies();

	const locale =
		languages.find((l) => l === (cookie.get('locale')?.value as never)) ??
		'pt-BR';

	return {
		locale,
		messages: (await import(`./${locale}`)).default,
	};
});
