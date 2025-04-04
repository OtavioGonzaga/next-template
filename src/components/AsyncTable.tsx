'use server';

import { TableColumn } from './Table';

interface TableProps<T = unknown> {
	columns: Array<TableColumn<T>>;
	data: Array<T>;
	perPage?: number;
	total?: number;
}

export function AsyncTable<T>({ columns, data }: Readonly<TableProps<T>>) {
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
					{data.map((row, index) => (
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
		</div>
	);
}
