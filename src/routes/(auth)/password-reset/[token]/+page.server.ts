import {
	isValidPasswordResetToken,
	validateEmailVerificationToken
} from '$lib/services/token-services';
import { redirect, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/services/lucia-services';

export const load: PageServerLoad = async ({ params }) => {
	const { token } = params;
	const validToken = await isValidPasswordResetToken(token);
	if (!validToken) throw redirect(302, '/password-reset');
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals, params }) => {
		const formData = await request.formData();
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');

		if (typeof password !== 'string' || password.length < 8 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}
		if (typeof confirmPassword !== 'string' || confirmPassword !== password) {
			return fail(400, {
				message: 'Password must match!'
			});
		}
		try {
			const { token } = params;
			const userId = await validateEmailVerificationToken(token);
			let user = await auth.getUser(userId);
			await auth.invalidateAllUserSessions(user.userId);
			await auth.updateKeyPassword('email', user.email, password);
			if (!user.emailVerified) {
				user = await auth.updateUserAttributes(user.userId, {
					email_verified: true
				});
			}
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session);
		} catch (e) {
			return fail(400, { message: 'Invalid or expired password reset link' + e });
		}
		throw redirect(302, '/');
	}
};
