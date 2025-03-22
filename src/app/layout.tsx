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
						style={{ height: '10000px' }}
						className={`${inter.variable} relative transition-colors antialiased bg-background dark:text-white dark:bg-dark-background  flex p-5`}
					>
						<SideMenuProvider>
							<Sidebar />
						</SideMenuProvider>
						<Header />
						{/* <main>{children}</main> */}
					</body>
				</ThemeProvider>
			</NextIntlClientProvider>
		</html>
	);
}
