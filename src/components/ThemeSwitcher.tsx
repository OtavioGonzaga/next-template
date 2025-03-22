'use client';

import { useTheme } from '@context/ThemeContext';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="flex items-center justify-center p-2 rounded-full w-14 h-14 transition-all bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600"
		>
			{theme === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
		</button>
	);
}
