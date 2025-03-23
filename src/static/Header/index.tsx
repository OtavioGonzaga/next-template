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
		<header className="fixed md:sticky top-5 right-0 h-20 mx-5 w-[calc(100%-40px)] border-b md:border-none border-b-gray-200 dark:border-b-gray-600 transition duration-300 md:shadow-md rounded-4xl bg-white dark:bg-gray-900 flex flex-row items-center px-8 justify-between">
			<button
				onClick={ToggleSidebarState}
				className="cursor-pointer border transition duration-300 border-gray-200 dark:border-gray-600 p-3 w-14 h-14 flex items-center justify-center rounded-full"
			>
				<MenuOutlined />
			</button>
			<ThemeSwitcher />
		</header>
	);
}
