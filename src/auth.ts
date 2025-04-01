import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

declare module 'next-auth' {
	interface Session {
		accessToken?: string;
	}
}

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
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}

			return token;
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken as never;
			return session;
		},
	},
});
