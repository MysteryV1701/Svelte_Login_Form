import { auth } from '$lib/services/lucia-services';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { LuciaError } from 'lucia';
import z from 'zod';
const loginUserSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, 'Password is required')
});

export const actions: Actions = {
	loginUser: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		const userData = loginUserSchema.safeParse(formData);
		if (!userData.success) {
			const data = {
				errors: userData.error.issues.map((issue) => {
					return {
						field: issue.path[0],
						message: issue.message
					};
				})
			};
			return fail(400, data);
		}
		const { email, password } = userData.data;

		try {
			const user = await auth.useKey('email', email.toLowerCase(), password);
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session);
		} catch (err) {
			if (
				err instanceof LuciaError &&
				(err.message === 'AUTH_INVALID_KEY_ID' || err.message === 'AUTH_INVALID_PASSWORD')
			) {
				return fail(400, {
					message: 'Invalid email or password'
				});
			}
		}
		const redirectTo = cookies.get('redirect_to');
		if (redirectTo) {
			throw redirect(302, redirectTo);
		}
		throw redirect(302, '/team');
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
		throw redirect(302, '/login');
	}
};
