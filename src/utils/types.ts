export interface IOrganization {
	id: string;
	createdAt?: string;
	name: string;
	email: string;
	address: string;
	emailSent?: boolean;
}

export interface IEmail {
	createdAt: string;
	organization: IOrganization;
	template: string;
}
