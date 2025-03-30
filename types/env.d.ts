/// <reference types="node" />

declare namespace NodeJS {
	interface ProcessEnv {
		API_URL;
		NEXTAUTH_SECRET;
		NEXTAUTH_USE_SECURE_COOKIES;
		NEXTAUTH_TRUST_HOST;
		KEYCLOAK_CLIENT_ID;
		KEYCLOAK_CLIENT_SECRET;
		KEYCLOAK_ISSUER;
	}
}
