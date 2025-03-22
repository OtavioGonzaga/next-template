'use client';

import { useSideMenu } from '@/context/SideMenuContext';
import { LanguageSelector } from '@components/LanguageSelector';
import { useTheme } from '@context/ThemeContext';
import { LogoutOutlined } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
	const { theme } = useTheme();
	const { items } = useSideMenu();
	const pathname = usePathname();

	return (
		<aside className="bg-white dark:bg-gray-900 h-full w-80 rounded-4xl shadow-2xl flex flex-col">
			<div className="flex items-center py-8 px-6 h-24">
				<Link href="/">
					<Image
						src={theme === 'light' ? 'logo.svg' : 'logoWhite.svg'}
						alt="Next.JS"
						className="fill-black"
						width={120}
						height={0}
					/>
				</Link>
			</div>
			<nav className="mt-4 flex-7/12">
				<ul>
					{items.map((item) => (
						<li key={item.title}>
							<Link href={item.path}>
								<div
									className={`sidebar-item p-4 me-8 rounded-e-4xl hover:text-secondary hover:bg-gray-200 duration-300 mb-2 ${
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
				<LanguageSelector />

				<span className="mt-8 cursor-pointer ms-2 p-4 hover:text-secondary transition mb-2">
					<LogoutOutlined />
					<span className="ms-3 font-semibold">{'Sair'}</span>
				</span>
			</div>
		</aside>
	);
}
