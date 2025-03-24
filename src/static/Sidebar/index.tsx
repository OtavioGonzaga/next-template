'use client';

import { useSideMenu } from '@/context/SideMenuContext';
import { LanguageSelector } from '@components/LanguageSelector';
import { useTheme } from '@context/ThemeContext';
import { LoginOutlined, LogoutOutlined } from '@mui/icons-material';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './index.css';
import { useTranslations } from 'next-intl';

export function Sidebar() {
	const { theme } = useTheme();
	const { items } = useSideMenu();
	const t = useTranslations();
	const pathname = usePathname();

	return (
		<aside className="sidebar h-[calc(100dvh-40px)] fixed md:sticky top-5 overflow-hidden transform ease-in-out duration-300 bg-white dark:bg-gray-900 min-w-80 rounded-4xl shadow-md ms-5 flex flex-col flex-shrink-0">
			<div className="flex items-center py-8 px-6 h-20 full-logo">
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
			<div className="flex items-center py-5 px-4 h-20 logo">
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
									className={`sidebar-item text-nowrap overflow-hidden px-4 py-3 me-8 rounded-e-4xl hover:text-secondary hover:bg-gray-200 duration-300 ${
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

			<div className="flex-2/12 flex flex-col justify-end pb-16">
				<div className="language-selector">
					<LanguageSelector />
				</div>

				<button
					onClick={() => signOut()}
					className="text-start sidebar-item overflow-hidden text-nowrap ms-5 mt-8 cursor-pointer hover:text-secondary transition mb-2"
				>
					<LogoutOutlined />
					<span className="ms-2 font-semibold">
						{t('actions.logout')}
					</span>
				</button>
				<button
					onClick={() => signIn('keycloak')}
					className="text-start sidebar-item overflow-hidden text-nowrap ms-5 mt-8 cursor-pointer hover:text-secondary transition mb-2"
				>
					<LoginOutlined />
					<span className="ms-2 font-semibold">
						{t('actions.login')}
					</span>
				</button>
			</div>
		</aside>
	);
}
