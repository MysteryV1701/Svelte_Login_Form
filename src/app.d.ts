// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { User } from '$lib/interface';

declare global {
	namespace App {
		interface Locals {
			user: User;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
