'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ArrowDropUpOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function LanguageSelector() {
	const router = useRouter();

	const [locale, setLocale] = useState('pt-BR');

	useEffect(() => {
		const storedLocale = document.cookie
			.split('; ')
			.find((row) => row.startsWith('locale='))
			?.split('=')[1];

		if (storedLocale) setLocale(storedLocale);
	}, []);

	const changeLanguage = (newLocale: string) => {
		document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
		setLocale(newLocale);
		router.refresh();
	};

	return (
		<div>
			<Menu>
				<MenuButton className="mx-4 flex w-52 cursor-pointer items-center rounded-xl border border-gray-200 px-6 py-3 transition duration-300 dark:border-gray-800">
					<Image
						src={`locales/${locale}.svg`}
						alt=""
						className="me-4 rounded-md"
						width={40}
						height={20}
					/>
					{locale.toUpperCase()}
					<ArrowDropUpOutlined className="ms-4" />
				</MenuButton>
				<MenuItems
					anchor="top start"
					className="flex w-52 cursor-pointer flex-col rounded-xl border border-gray-200 dark:border-gray-800"
				>
					<MenuItem
						as="div"
						className="flex border-b border-b-gray-200 py-3 ps-6 pe-9 dark:border-b-gray-800"
						onClick={() => changeLanguage('pt-BR')}
					>
						<Image
							src={`locales/pt-BR.svg`}
							alt=""
							className="me-4 rounded-md"
							width={40}
							height={20}
						/>
						<div>PT-BR</div>
					</MenuItem>
					<MenuItem
						as="div"
						className="flex py-3 ps-6 pe-9"
						onClick={() => changeLanguage('en-US')}
					>
						<Image
							src={`locales/en-US.svg`}
							alt=""
							className="me-4 rounded-md"
							width={40}
							height={20}
						/>
						<div>EN-US</div>
					</MenuItem>
				</MenuItems>
			</Menu>
		</div>
	);
}
