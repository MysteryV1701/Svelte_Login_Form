import { error, json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { Database } from '$lib/server/db';
import type { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { AuthService } from '$lib/services/auth-service';

export const POST: RequestHandler = async (event) => {
	const { cookies } = event;
	const { slug } = event.params;
	try {
		switch (slug) {
			case 'logout':
				await AuthService.logOut(cookies)
					.then((res) => {})
					.catch((e) => {
						return json({ message: 'Logout Not Successful' });
					});

			case 'login':
				const body_login: User = await event.request.json();
				if (!body_login.email || !body_login.password) {
					error(400, 'Please provide an email address and password to authenticate');
				}
				const userLogin = await Database.findUser(body_login.email);
				if (
					userLogin?.email === body_login.email &&
					(await bcrypt.compare(body_login.password, userLogin.password))
				) {
					event.locals.user = userLogin;
					await AuthService.logIn(userLogin.id, cookies);
					return json({ message: 'Login Successful', user: userLogin });
				} else {
					error(401, 'Invalid	email/password combination');
				}

			case 'register':
				const body: User = await event.request.json();
				if (!body.email || !body.name || !body.password) {
					error(400, 'Please supply all required: email, password, name');
				}
				const user = await Database.findUser(body.email);
				if (user) {
					error(404, 'Email has exist');
				} else {
					await Database.registerNewUser(body);
					break;
				}

			default:
				error(404, 'Invalid Endpoint');
		}
	} catch (err) {
		error(503, 'Could not communicate with database');
	}
	return json({ message: '' });
};
