'use client';

import {
	DashboardOutlined,
	GroupOutlined,
	SettingsOutlined,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { createContext, useContext, useMemo } from 'react';

export interface SideMenuItem {
	title: string;
	path: string;
	icon: React.ReactNode;
}

interface SideMenuContextProps {
	items: Array<SideMenuItem>;
}

const SideMenuContext = createContext<SideMenuContextProps>({
	items: [],
});

export function SideMenuProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const t = useTranslations();

	const items: Array<SideMenuItem> = useMemo<Array<SideMenuItem>>(
		() => [
			{
				title: t('dashboard'),
				path: '/',
				icon: <DashboardOutlined />,
			},
			{
				title: t('customers.customers'),
				path: '/customers',
				icon: <GroupOutlined />,
			},
			{
				title: t('settings'),
				path: '/settings',
				icon: <SettingsOutlined />,
			},
		],
		[t],
	);

	const value: SideMenuContextProps = useMemo(
		() => ({
			items,
		}),
		[items],
	);

	return (
		<SideMenuContext.Provider value={value}>
			{children}
		</SideMenuContext.Provider>
	);
}

export function useSideMenu() {
	return useContext(SideMenuContext);
}
