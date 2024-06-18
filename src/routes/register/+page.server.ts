import type { PageServerLoad } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = ({ locals }) => {
	const { user } = locals;
	if (user) {
		redirect(302, '/');
	}
	return {};
};
