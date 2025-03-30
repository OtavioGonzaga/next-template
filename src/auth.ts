import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: {
		strategy: 'jwt',
	},
	providers: [
		KeycloakProvider({
			clientId: process.env.KEYCLOAK_CLIENT_ID,
			clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
			issuer: process.env.KEYCLOAK_ISSUER,
		}),
	],
	useSecureCookies: process.env.NEXTAUTH_USE_SECURE_COOKIES === 'true',
	trustHost: process.env.NEXTAUTH_TRUST_HOST === 'true',
});
