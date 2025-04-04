import { SideMenuProvider } from '@context/SideMenuContext';
import { ThemeProvider } from '@context/ThemeContext';
import { Footer } from '@static/Footer';
import { Header } from '@static/Header';
import { Sidebar } from '@static/Sidebar';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import React from 'react';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Next Template',
	description: 'Template for Next.JS with TailwindCSS',
};

export default async function RootLayout({
	children,
	params: { session },
}: Readonly<{
	children: React.ReactNode;
	params: { session: Session };
}>) {
	const locale = await getLocale();

	return (
		<React.StrictMode>
			<html lang={locale}>
				<NextIntlClientProvider>
					<ThemeProvider>
						<body
							className={`${inter.variable} bg-background dark:bg-dark-background relative flex h-screen flex-col overflow-x-hidden antialiased transition-colors dark:text-white`}
						>
							<SessionProvider session={session}>
								<div className="flex h-full">
									<SideMenuProvider>
										<Sidebar />
									</SideMenuProvider>
									<div className="flex flex-1 flex-col">
										<Header />
										<main className="mt-4 flex flex-1 flex-col justify-between overflow-auto p-6">
											{children}
											<Footer />
										</main>
									</div>
								</div>
							</SessionProvider>
						</body>
					</ThemeProvider>
				</NextIntlClientProvider>
			</html>
		</React.StrictMode>
	);
}
