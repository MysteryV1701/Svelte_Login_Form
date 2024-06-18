import prisma, { type User } from '@prisma/client';
import { RoleName } from '$lib/interface/role';
import bcrypt from 'bcrypt';
export const db = new prisma.PrismaClient();

export class Database {
	public static async findUser(email: string): Promise<User | undefined> {
		const user = await db.user.findUnique({ where: { email } });
		if (user) return user;
	}
	public static async registerNewUser(user: User): Promise<User | undefined> {
		try {
			const hashed_password = await bcrypt.hash(user.password, 10);
			return await db.user.create({
				data: {
					email: user.email,
					password: hashed_password,
					role: { connect: { name: RoleName.customer } },
					phone: 0,
					name: user.name
				}
			});
		} catch (error) {
			console.error(error);
			return undefined;
		}
	}
	public static async getAppSettingInt(key: string): Promise<number> {
		const appSetting = await db.appSetting.findUnique({ where: { key } });
		const number_value = Number(appSetting?.value);
		const number_value_not_nan = Number.isNaN(number_value) ? 0 : number_value;
		return number_value_not_nan;
	}
}
