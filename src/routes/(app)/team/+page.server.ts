import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { teams, user } = await parent();
	if (!teams || !teams.length) {
		throw redirect(302, '/team/create');
	}
	return { teams, user };
};
