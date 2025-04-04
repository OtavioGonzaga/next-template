import { auth } from '@/auth';
import axios, { AxiosError } from 'axios';

const handler = auth(async (req) => {
	try {
		const { method, body, auth } = req;

		const response = await axios({
			url: `${process.env.API_URL}/plans?page=1?perPage=10`,
			method,
			headers: {
				Authorization: `Bearer ${auth?.accessToken}`,
			},
			data: body,
		});

		return new Response(response.data, { status: response.status });
	} catch (error) {
		if (error instanceof AxiosError) {
			return new Response(error.cause?.message, { status: error.status });
		}
		return new Response('Internal error', { status: 500 });
	}
}) as never;

export {
	handler as GET,
	handler as PUT,
	handler as POST,
	handler as HEAD,
	handler as PATCH,
	handler as DELETE,
	handler as OPTIONS,
};
