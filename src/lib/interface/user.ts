import type { Role } from './role';

export type UserInterface =
	| {
			id: number;
			email: string | null;
			password: string | null;
			name: string | null;
			phone?: string;
			role: 'admin' | 'manager' | 'customer';
			expires?: string;
	  }
	| undefined
	| null;
