import { fail, type Actions } from '@sveltejs/kit';

import z from 'zod';
import { db } from '$lib/server/db';
import { auth } from '$lib/services/lucia-services';
import { generatePasswordResetToken } from '$lib/services/token-services';
import { sendMail } from '$lib/services/email-services';
const resetPasswordSchema = z.object({
	email: z.string().email().min(1)
});
export const actions: Actions = {
	default: async ({ url, request }) => {
		const formData = Object.fromEntries(await request.formData());
		const resetPasswordData = resetPasswordSchema.safeParse(formData);

		if (!resetPasswordData.success) {
			const data = {
				data: formData,
				errors: resetPasswordData.error.flatten().fieldErrors
			};
			return fail(400, data);
		}
		try {
			const storedUser = await db.user.findUnique({
				where: {
					email: resetPasswordData.data.email
				}
			});
			if (!storedUser) {
				return fail(400, { message: 'User not found' });
			}
			const user = auth.transformDatabaseUser(storedUser);
			const token = await generatePasswordResetToken(user.userId);

			sendMail({
				to: user.email,
				subject: 'Reset your password',
				html: `<html><body><p>Click <a href="${url.origin}/password-reset/${token}">here</a> to reset your password.</p></body></html>`
			});
			return {
				success: true
			};
		} catch (error) {
			return fail(500, { message: 'An Unknown error occurred' + error });
		}
	}
};
