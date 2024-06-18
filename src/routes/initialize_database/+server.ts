import { db } from '$lib/server/db';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	try {
		await db.role.create({ data: { name: 'admin' } });
		await db.role.create({ data: { name: 'manager' } });
		await db.role.create({ data: { name: 'customer' } });
		await db.appSetting.create({ data: { key: 'session_lifetime_sec', value: '600' } });
		return new Response('Success');
	} catch (err) {
		return new Response('Error');
	}
};
