'use client';

import { useTheme } from '@context/ThemeContext';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-lg transition-all bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600"
		>
			{theme === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
		</button>
	);
}
