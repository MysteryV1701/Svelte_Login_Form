// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { User } from '$lib/interface';

declare global {
	namespace App {
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		interface PageData {
			user?: User;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	namespace lucia {
		type Auth = import('$lib/services/lucia-services').Auth;
		type DatabaseUserAttributes = {
			email: string;
			email_verified: string;
			name: string;
			role_Id: number;
		};
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		type DatabaseSessionAttributes = {};
	}
}

export {};
