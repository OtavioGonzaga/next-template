import { getToken } from 'next-auth/jwt';
import { signIn } from 'next-auth/react';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
	const publicRoutes: Array<string> = ['/api/auth/signin/keycloak'];

	if (publicRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.next();
	}

	const token = await getToken({
		req,
		secret: process.env.NEXTAUTH_SECRET,
	});

	if (!token) {
		// Se o token não existir, usa o signIn para redirecionar diretamente para o Keycloak
		const res = NextResponse.redirect(
			new URL('/api/auth/signin/keycloak', req.url),
		);

		// O NextAuth usa a função signIn para disparar o login via Keycloak
		await signIn('keycloak', {
			redirect: false, // Impede o redirecionamento padrão e usa a lógica do NextResponse
		});

		return res;
	}

	return NextResponse.redirect(new URL('/', req.url));
}
