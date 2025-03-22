'use client';

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

export function ThemeProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') as Theme | null;
		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.classList.toggle(
				'dark',
				storedTheme === 'dark',
			);
		}
	}, []);

	const toggleTheme = useCallback(() => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
	}, [theme]);

	const value = useMemo(
		() => ({
			theme,
			toggleTheme,
		}),
		[theme, toggleTheme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
