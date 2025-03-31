'use client';

import { useTheme } from '@context/ThemeContext';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white p-2 transition-all dark:border-gray-600 dark:bg-gray-900"
		>
			{theme === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
		</button>
	);
}
