import { Translations } from '@locales/types/translations.type';

declare module 'next-intl' {
	interface AppConfig {
		Messages: Translations;
	}
}
