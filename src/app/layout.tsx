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
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();

	return (
		<html lang={locale}>
			<NextIntlClientProvider>
				<ThemeProvider>
					<body
						className={`${inter.variable} relative overflow-x-hidden transition-colors antialiased bg-background dark:text-white dark:bg-dark-background h-screen flex flex-col`}
					>
						<div className="flex h-full">
							<SideMenuProvider>
								<Sidebar />
							</SideMenuProvider>
							<div className="flex flex-col flex-1">
								<Header />
								<main className="flex-1 p-6 overflow-auto mt-4 flex flex-col justify-between">
									{children}
									<Footer />
								</main>
							</div>
						</div>
					</body>
				</ThemeProvider>
			</NextIntlClientProvider>
		</html>
	);
}
