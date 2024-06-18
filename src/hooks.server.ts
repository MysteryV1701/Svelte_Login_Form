import { AuthService } from '$lib/services/auth-service';
import { CookiesManager } from '$lib/services/cookie-services';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const cookiesManager = new CookiesManager(event.cookies);
	const session_id = cookiesManager.session_id;
	if (!session_id) return await resolve(event);
	const auth_token = await AuthService.findAuthToken(session_id);

	if (!auth_token) return await resolve(event);
	await AuthService.accessValid(auth_token.id, event.cookies);
	if (!event.locals.user) cookiesManager.deleteSessionId();
	event.locals.user = {
		email: auth_token.user.email,
		role: auth_token.user.role,
		name: auth_token.user.name,
		phone: auth_token.user.phone
	};
	return await resolve(event);
};
