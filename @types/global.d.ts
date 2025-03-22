import { Translations } from '@locales/translations.type';

declare module 'next-intl' {
	interface AppConfig {
		Messages: Translations;
	}
}
