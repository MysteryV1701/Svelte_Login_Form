import { sendMail } from '$lib/services/email-services.js';
export const load = async ({ locals }) => {
	sendMail({
		to: `quocvi1701@gmai.com`,
		subject: 'Reset your password',
		html: `<html><body><p>Click to reset your password.</p></body></html>`
	});
	const session = await locals.auth.validate();
	return {
		user: session?.user
	};
};
