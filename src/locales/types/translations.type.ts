import { TranslationsCustomers } from './customers.type';

export type Translations = {
	dashboard: string;
	settings: string;

	customers: TranslationsCustomers;

	errors: {
		notFound: string;
	};

	actions: {
		actions: string;
		delete: string;
		edit: string;
		save: string;
		cancel: string;
		create: string;
		update: string;
		reset: string;
		return: string;
		returnTo: string;
		login: string;
		logout: string;
	};

	fields: {
		selectEntity: string;
		name: string;
		email: string;
	};

	allRights: string;
};
