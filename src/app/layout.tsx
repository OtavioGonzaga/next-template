import { SideMenuProvider } from '@context/SideMenuContext';
import { ThemeProvider } from '@context/ThemeContext';
import { Sidebar } from '@static/Sidebar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { Header } from '@static/Header';

const inter = Inter({
	variable: '--font-inter',
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
						className={`${inter.variable} relative w-full overflow-x-hidden transition-colors antialiased bg-background dark:text-white dark:bg-dark-background h-screen flex flex-col`}
					>
						<SideMenuProvider>
							<div className="flex h-full">
								<Sidebar />
								<div className="flex flex-col flex-1">
									<Header />
									<main className="flex-1 p-8 overflow-auto">
										{children}
									</main>
								</div>
							</div>
						</SideMenuProvider>
					</body>
				</ThemeProvider>
			</NextIntlClientProvider>
		</html>
	);
}
