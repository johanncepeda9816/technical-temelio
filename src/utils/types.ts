export interface IOrganization {
	id: string;
	date?: string;
	name: string;
	email: string;
	address: string;
}

export interface IEmail {
	organization: IOrganization;
	emailContent: string;
}
