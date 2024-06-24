export type UserInterface =
	| {
			id: string;
			email: string | null;
			email_verified: boolean;
			password: string | null;
			name: string | null;
			phone?: string;
			role: 'admin' | 'manager' | 'customer';
			expires?: string;
	  }
	| undefined
	| null;
