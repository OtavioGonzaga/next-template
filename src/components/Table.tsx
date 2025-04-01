'use client';

import {
	FirstPage,
	LastPage,
	NavigateBefore,
	NavigateNext,
} from '@mui/icons-material';
import { ReactNode, useState } from 'react';

export interface TableColumn<T> {
	name: string;
	cell: (row: T) => ReactNode;
	width?: string | number;
	minWidth?: string | number;
	maxWidth?: string | number;
	hidden?: boolean;
}

interface TableProps<T = unknown> {
	columns: Array<TableColumn<T>>;
	data: Array<T>;
	perPage?: number;
	total?: number;
}

export function Table<T>({
	columns,
	data,
	perPage,
	total = data.length,
}: Readonly<TableProps<T>>) {
	const [page, setPage] = useState(1);

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full">
				<thead>
					<tr>
						{columns.map(
							({ name, hidden, minWidth, maxWidth, width }) => (
								<th
									key={name}
									style={{
										display: hidden ? 'none' : undefined,
										minWidth,
										maxWidth,
										width,
									}}
									className="px-4 py-4 text-left"
								>
									{name}
								</th>
							),
						)}
					</tr>
				</thead>
				<tbody>
					{data
						.slice(
							perPage ? (page - 1) * perPage : 0,
							perPage ? page * perPage : undefined,
						)
						.map((row, index) => (
							<tr
								key={index}
								className="border-t border-gray-200 transition duration-300 dark:border-gray-600"
							>
								{columns.map(
									({
										cell,
										name,
										hidden,
										maxWidth,
										minWidth,
										width,
									}) => (
										<td
											key={name}
											style={{
												display: hidden
													? 'none'
													: undefined,
												minWidth,
												maxWidth,
												width,
											}}
											className="px-4 py-4 text-sm"
										>
											{cell(row)}
										</td>
									),
								)}
							</tr>
						))}
				</tbody>
			</table>
			{perPage && total > perPage && (
				<div className="flex items-center justify-end px-4 py-4">
					<span className="text-sm text-gray-500">
						{(page - 1) * perPage + 1} -{' '}
						{Math.min(perPage * page, total)} / {total}
					</span>

					<button
						onClick={() => setPage(1)}
						className="text-secondary ms-5 cursor-pointer disabled:cursor-default disabled:opacity-50"
						disabled={page === 1}
					>
						<FirstPage />
					</button>
					<button
						onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
						className="text-secondary ms-1 cursor-pointer disabled:cursor-default disabled:opacity-50"
						disabled={page === 1}
					>
						<NavigateBefore />
					</button>
					<button
						onClick={() =>
							setPage((prev) =>
								Math.min(prev + 1, Math.ceil(total / perPage)),
							)
						}
						className="text-secondary ms-1 cursor-pointer disabled:cursor-default disabled:opacity-50"
						disabled={page === Math.ceil(total / perPage)}
					>
						<NavigateNext />
					</button>
					<button
						onClick={() => setPage(Math.ceil(total / perPage) || 1)}
						className="text-secondary ms-1 cursor-pointer disabled:cursor-default disabled:opacity-50"
						disabled={page === Math.ceil(total / perPage)}
					>
						<LastPage />
					</button>
				</div>
			)}
		</div>
	);
}
