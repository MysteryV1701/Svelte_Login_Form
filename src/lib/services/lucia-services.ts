import { dev } from '$app/environment';
import {
	GOOGLE_OAUTH_CLIENT_ID,
	GOOGLE_OAUTH_CLIENT_SECRET,
	GOOGLE_OAUTH_REDIRECT_URI
} from '$env/static/private';
import { prisma } from '@lucia-auth/adapter-prisma';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';

import { db } from '../server/db';
import { google } from '@lucia-auth/oauth/providers';
export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: prisma(db),
	sessionCookie: {
		expires: false
	},
	getUserAttributes: (data) => {
		return {
			email: data.email,
			name: data.name,
			emailVerified: data.email_verified,
			role_id: data.role_id
		};
	}
});

export const googleAuth = google(auth, {
	clientId: GOOGLE_OAUTH_CLIENT_ID,
	clientSecret: GOOGLE_OAUTH_CLIENT_SECRET,
	redirectUri: GOOGLE_OAUTH_REDIRECT_URI,
	scope: [
		'openid',
		'https://www.googleapis.com/auth/userinfo.profile',
		'https://www.googleapis.com/auth/userinfo.email'
	],
	accessType: 'offline' as 'offline' | 'online' | undefined
});

export type Auth = typeof auth;
