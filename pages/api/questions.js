// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { question } from '@/question';
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
	// await NextCors(req, res, {
	// 	// options
	// 	methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
	// 	origin: '*',
	// 	optionsSuccessStatus: 200,
	// });

	// res.status(200).json(question);
	return NextCors(
		req,
		new Response(JSON.stringify(question), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		})
	);
}
