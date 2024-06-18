import { Database, db } from '$lib/server/db';
import type { AuthToken, User, Role } from '@prisma/client';
import type { Cookies } from '@sveltejs/kit';
import { CookiesManager } from './cookie-services';

export class AuthService {
	public static async getSessionLifetimeSec(): Promise<number> {
		return await Database.getAppSettingInt('session_lifetime_sec');
	}
	public static getLimit(lifetime_sec: number): Date {
		const limit = new Date();
		if (lifetime_sec == 0) console.warn('lifetime_sec is 0');
		limit.setSeconds(limit.getSeconds() - lifetime_sec);
		return limit;
	}
	public static async createAuthToken(
		user_id: number,
		session_lifetime_sec: number
	): Promise<AuthToken> {
		const session_limit = AuthService.getLimit(session_lifetime_sec);
		const [auth_token] = await db.$transaction([
			db.authToken.create({
				data: { user_id, token: crypto.randomUUID() }
			}),
			db.authToken.deleteMany({ where: { updated_at: { lt: session_limit } } })
		]);
		return auth_token;
	}

	public static async findAuthToken(
		session_id: string
	): Promise<(AuthToken & { user: User & { role: Role } }) | null> {
		const session_lifetime_sec = await AuthService.getSessionLifetimeSec();
		const session_limit = AuthService.getLimit(session_lifetime_sec);
		const auth_token = await db.authToken.findFirst({
			where: { updated_at: { gte: session_limit } },
			include: { user: { include: { role: true } } }
		});
		return auth_token;
	}
	public static async updateAuthToken(auth_token_id: number): Promise<AuthToken> {
		const auth_token = await db.authToken.update({
			where: { id: auth_token_id },
			data: { updated_at: new Date() }
		});
		return auth_token;
	}
	public static async accessValid(auth_token_id: number, cookies: Cookies): Promise<void> {
		const auth_token = await AuthService.updateAuthToken(auth_token_id);
		const session_lifetime_sec = await AuthService.getSessionLifetimeSec();
		new CookiesManager(cookies).setSessionId(auth_token.token, session_lifetime_sec);
	}
	public static async logIn(user_id: number, cookies: Cookies): Promise<void> {
		const session_lifetime_sec = await AuthService.getSessionLifetimeSec();
		const auth_token = await AuthService.createAuthToken(user_id, session_lifetime_sec);
		new CookiesManager(cookies).setSessionId(auth_token.token, session_lifetime_sec);
	}
	public static async logOut(cookies: Cookies): Promise<void> {
		const cookiesManager = new CookiesManager(cookies);
		await db.authToken.delete({ where: { token: cookiesManager.session_id } }).then(() => {
			cookiesManager.deleteSessionId();
		});
	}
}
