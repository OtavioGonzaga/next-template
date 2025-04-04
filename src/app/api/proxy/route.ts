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
	}
});

export {
	handler as DELETE,
	handler as GET,
	handler as HEAD,
	handler as OPTIONS,
	handler as PATCH,
	handler as POST,
	handler as PUT,
};
