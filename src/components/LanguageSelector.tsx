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
				<MenuButton className="cursor-pointer mx-4 transition duration-300 border border-gray-200 dark:border-gray-800 px-6 py-3 flex items-center rounded-xl w-52">
					<Image
						src={`locales/${locale}.svg`}
						alt=""
						className="rounded-md me-4"
						width={40}
						height={20}
					/>
					{locale.toUpperCase()}
					<ArrowDropUpOutlined className="ms-4" />
				</MenuButton>
				<MenuItems
					anchor="top start"
					className="flex flex-col cursor-pointer border border-gray-200 dark:border-gray-800 rounded-xl w-52"
				>
					<MenuItem
						as="div"
						className="flex ps-6 pe-9 py-3 border-b border-b-gray-200 dark:border-b-gray-800"
						onClick={() => changeLanguage('pt-BR')}
					>
						<Image
							src={`locales/pt-BR.svg`}
							alt=""
							className="rounded-md me-4"
							width={40}
							height={20}
						/>
						<div>PT-BR</div>
					</MenuItem>
					<MenuItem
						as="div"
						className="flex ps-6 pe-9 py-3"
						onClick={() => changeLanguage('en-US')}
					>
						<Image
							src={`locales/en-US.svg`}
							alt=""
							className="rounded-md me-4"
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
