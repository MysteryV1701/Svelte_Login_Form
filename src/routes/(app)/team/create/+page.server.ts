import { db } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const name = formData.get('team-name');
		const session = await locals.auth.validate();
		if (!session.user) {
			throw new Error('User not found');
		}
		const slug = name!.toString().toLowerCase().replace(/\s/g, '-');
		await db.team.create({
			data: {
				name: name!.toString(),
				slug,
				UserTeamRole: {
					create: {
						user_id: session.user.userId,
						role: 'ADMIN'
					}
				}
			}
		});
		throw redirect(302, `/team/${slug}`);
	}
};
