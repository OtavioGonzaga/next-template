// src/app/login/page.tsx
'use client';

import Loading from '@components/Loading';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
	const { status } = useSession();
	const { back } = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (status === 'unauthenticated') {
			setTimeout(() => {
				signIn('keycloak', {
					redirectTo: searchParams?.get('callbackUrl') ?? '/',
				});
			}, 1000);
		}

		if (status === 'authenticated') {
			back();
		}
	}, [back, searchParams, status]);

	if (status === 'loading') {
		return <Loading />;
	}

	return null;
}
