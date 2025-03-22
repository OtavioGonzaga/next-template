import { SideMenuProvider } from '@context/SideMenuContext';
import { ThemeProvider } from '@context/ThemeContext';
import { Sidebar } from '@static/Sidebar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

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
						className={`${inter.variable} transition-colors antialiased bg-background dark:text-white dark:bg-dark-background h-screen flex overflow-scroll p-5`}
					>
						<SideMenuProvider>
							<Sidebar />
						</SideMenuProvider>
						<main>{children}</main>
					</body>
				</ThemeProvider>
			</NextIntlClientProvider>
		</html>
	);
}
