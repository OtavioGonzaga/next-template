'use client';

import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { MenuOutlined } from '@mui/icons-material';

export function Header() {
	const ToggleSidebarState = () => {
		const sidebar = document.querySelector('.sidebar');

		if (sidebar) {
			sidebar.classList.toggle('toggled');
		}
	};

	return (
		<header className="fixed top-5 right-0 mx-5 flex h-20 w-[calc(100%-40px)] flex-row items-center justify-between rounded-4xl border-b border-b-gray-200 bg-white px-8 transition duration-300 md:sticky md:border-none md:shadow-md dark:border-b-gray-600 dark:bg-gray-900">
			<button
				onClick={ToggleSidebarState}
				className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-gray-200 p-3 transition duration-300 dark:border-gray-600"
			>
				<MenuOutlined />
			</button>
			<ThemeSwitcher />
		</header>
	);
}
