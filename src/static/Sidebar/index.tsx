'use client';

import { useSideMenu } from '@/context/SideMenuContext';
import { LanguageSelector } from '@components/LanguageSelector';
import { useTheme } from '@context/ThemeContext';
import { LoginOutlined, LogoutOutlined } from '@mui/icons-material';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './index.css';

export function Sidebar() {
	const { theme } = useTheme();
	const { items } = useSideMenu();
	const { status } = useSession();
	const t = useTranslations();
	const pathname = usePathname();

	return (
		<aside className="sidebar fixed top-5 ms-5 flex h-[calc(100dvh-40px)] min-w-80 flex-shrink-0 transform flex-col overflow-hidden rounded-4xl bg-white shadow-md duration-300 ease-in-out md:sticky dark:bg-gray-900">
			<div className="full-logo flex h-20 items-center px-6 py-8">
				<Link href="/">
					<Image
						src={
							theme === 'light'
								? 'fullLogo.svg'
								: 'fullLogoWhite.svg'
						}
						alt="Next.JS"
						width={120}
						height={0}
					/>
				</Link>
			</div>
			<div className="logo flex h-20 items-center px-4 py-5">
				<Link href="/">
					<Image
						src={theme === 'light' ? 'logo.svg' : 'logoWhite.svg'}
						alt="Next.JS"
						width={40}
						height={0}
					/>
				</Link>
			</div>
			<nav className="mt-8 flex-7/12">
				<ul>
					{items.map((item) => (
						<li key={item.title}>
							<Link href={item.path}>
								<div
									className={`sidebar-item hover:text-secondary me-8 overflow-hidden rounded-e-4xl px-4 py-3 text-nowrap duration-300 hover:bg-gray-200 ${
										pathname === item.path ? 'active' : ''
									}`}
								>
									{item.icon}
									<span className="ms-3 font-semibold">
										{item.title}
									</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div className="mx-4 mb-16 flex flex-2/12 flex-col justify-end">
				<div className="language-selector">
					<LanguageSelector />
				</div>

				{status === 'authenticated' && (
					<button
						onClick={() => signOut()}
						className="sidebar-item hover:text-secondary mt-8 mb-2 cursor-pointer overflow-hidden text-start text-nowrap transition"
					>
						<LogoutOutlined />
						<span className="ms-2 font-semibold">
							{t('actions.logout')}
						</span>
					</button>
				)}
				{status === 'unauthenticated' && (
					<button
						onClick={() => signIn('keycloak')}
						className="sidebar-item hover:text-secondary mt-8 mb-2 cursor-pointer overflow-hidden text-start text-nowrap transition"
					>
						<LoginOutlined />
						<span className="ms-2 font-semibold">
							{t('actions.login')}
						</span>
					</button>
				)}
			</div>
		</aside>
	);
}
