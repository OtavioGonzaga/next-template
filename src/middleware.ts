import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth(async (req) => {
	const publicRoutes = ['/login', '/register', '/api/auth'];

	if (
		!(
			req.auth ||
			publicRoutes.some((pr) => req.nextUrl.pathname.startsWith(pr))
		)
	) {
		const newUrl = new URL('/login', req.nextUrl.origin);

		newUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);

		return NextResponse.redirect(newUrl);
	}

	return NextResponse.next();
});

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.svg).*)',
	],
};
