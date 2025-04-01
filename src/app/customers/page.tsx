'use client';

import Button from '@components/Button';
import { Card } from '@components/Card';
import { Table, TableColumn } from '@components/Table';
import { EditOutlined } from '@mui/icons-material';
import { useTranslations } from 'next-intl';

export default function Customers() {
	const t = useTranslations();

	const columns: Array<TableColumn<{ name: string; email: string }>> = [
		{
			name: t('customers.customer'),
			cell: (row) => row.name,
		},
		{
			name: t('fields.email'),
			cell: (row) => row.email,
			width: '50%',
		},
		{
			name: t('actions.actions'),
			cell: (row) => (
				<Button
					className="bg-primary pointer rounded-lg p-2 text-white"
					onClick={() => alert(`Editing ${row.name}`)}
				>
					<EditOutlined />
				</Button>
			),
			width: 80,
		},
	];

	return (
		<>
			<div className="mb-6 flex justify-between gap-6">
				<Card>
					<h3 className="mb-4 text-lg font-bold">Lorem</h3>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Cum ab alias modi magnam accusantium hic obcaecati
						quasi laborum eligendi. Enim aut asperiores aliquid
						vitae repudiandae quas atque quisquam porro. Similique?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Similique reiciendis quae odio libero, excepturi eum
						soluta, vel est laborum dolorem mollitia! Dolorum
						mollitia exercitationem veniam deserunt perferendis
						nesciunt, ea quae.
					</p>
				</Card>
				<Card>
					<h3 className="mb-4 text-lg font-bold">Ipsum</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Voluptatem eius consectetur architecto deserunt
						reiciendis harum ipsam nemo cumque nesciunt amet,
						eveniet, non dolor, rerum explicabo iusto ea vero enim.
						Totam?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Placeat et nostrum, magni maiores reprehenderit quod
						eligendi odit porro sit aliquam.
					</p>
				</Card>
			</div>

			<Card>
				<h3 className="mb-4 text-lg font-bold">
					{t('customers.customers')}
				</h3>
				<Table
					columns={columns}
					data={[
						{ name: 'John Doe', email: 'john.doe@example.com' },
						{ name: 'Jane Smith', email: 'jane.smith@example.com' },
						{
							name: 'Alice Johnson',
							email: 'alice.johnson@example.com',
						},
						{ name: 'Bob Brown', email: 'bob.brown@example.com' },
						{ name: 'John Doe', email: 'john.doe@example.com' },
						{ name: 'Jane Smith', email: 'jane.smith@example.com' },
						{
							name: 'Alice Johnson',
							email: 'alice.johnson@example.com',
						},
						{ name: 'Bob Brown', email: 'bob.brown@example.com' },
						{ name: 'John Doe', email: 'john.doe@example.com' },
						{ name: 'Jane Smith', email: 'jane.smith@example.com' },
						{
							name: 'Alice Johnson',
							email: 'alice.johnson@example.com',
						},
					]}
					perPage={10}
				/>
			</Card>
		</>
	);
}
