export interface IOrganization {
	id: string;
	createdAt?: string;
	name: string;
	email: string;
	address: string;
}

export interface IEmail {
	organization: IOrganization;
	template: string;
}
