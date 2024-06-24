import { db } from '../server/db';
import { generateRandomString, isWithinExpiration } from 'lucia/utils';

const EXPIRES_IN = 1000 * 60 * 60 * 2;
export const generateEmailVerificationToken = async (userId: string) => {
	const storedUserTokens = await db.emailVerificationToken.findMany({
		where: {
			user_id: userId
		}
	});
	if (storedUserTokens.length > 0) {
		const reusableStoredToken = storedUserTokens.find((token) => {
			return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
		});
		if (reusableStoredToken) return reusableStoredToken.id;
	}
	const token = generateRandomString(63);
	await db.emailVerificationToken.create({
		data: {
			id: token,
			expires: new Date().getTime() + EXPIRES_IN,
			user_id: userId
		}
	});
};
export const validateEmailVerificationToken = async (token: string) => {
	const storedToken = await db.$transaction(async (trx) => {
		const storedToken = await trx.emailVerificationToken.findFirstOrThrow({
			where: {
				id: token
			}
		});
		await trx.emailVerificationToken.deleteMany({
			where: {
				user_id: storedToken.user_id
			}
		});
		return storedToken;
	});
	const tokenExpires = Number(storedToken.expires);
	if (!isWithinExpiration(tokenExpires)) throw new Error('Expires Token');
	return storedToken.id;
};

export const generatePasswordResetToken = async (userId: string) => {
	// Select token
	const storedUserTokens = await db.passwordResetToken.findMany({
		where: {
			user_id: userId
		}
	});
	if (storedUserTokens.length > 0) {
		// Check token expires 1 hours
		const reusableStoredToken = storedUserTokens.find((token) => {
			return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
		});
		if (reusableStoredToken) return reusableStoredToken.id;
	}
	const token = generateRandomString(63);
	// Create new token
	await db.passwordResetToken.create({
		data: {
			id: token,
			expires: new Date().getTime() + EXPIRES_IN,
			user_id: userId
		}
	});
};
export const validatePasswordResetToken = async (token: string) => {
	const storedToken = await db.$transaction(async (trx) => {
		const storedToken = await trx.passwordResetToken.findFirstOrThrow({
			where: {
				id: token
			}
		});
		await trx.passwordResetToken.deleteMany({
			where: {
				user_id: storedToken.user_id
			}
		});
		return storedToken;
	});
	const tokenExpires = Number(storedToken.expires);
	if (!isWithinExpiration(tokenExpires)) {
		throw new Error('Expires Token');
	}
	return storedToken.user_id;
};

export const isValidPasswordResetToken = async (token: string) => {
	const storedUser = await db.passwordResetToken.findFirst({
		where: {
			id: token
		}
	});
	if (!storedUser) return false;
	const tokenExpires = Number(storedUser.expires);
	if (!isWithinExpiration(tokenExpires)) return false;
	return true;
};
