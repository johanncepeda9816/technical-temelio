import * as yup from "yup";

export interface IOrganizationFormProps {
	onSubmit: (values: any) => Promise<void>;
}

const organizationScheme = yup.object().shape({
	name: yup.string().required("The name is required"),
	email: yup
		.string()
		.email("The email is not valid")
		.required("The email is required"),
	address: yup.string().required("The address is required"),
});

const initalState = {
	name: "",
	email: "",
	address: "",
};

export { organizationScheme, initalState };
