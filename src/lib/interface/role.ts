export type Role = {
	id: number;
	create_at: Date;
	update_at: Date;
	name: RoleName;
};
export enum RoleName {
	admin = 'admin',
	customer = 'customer',
	manager = 'manager'
}
