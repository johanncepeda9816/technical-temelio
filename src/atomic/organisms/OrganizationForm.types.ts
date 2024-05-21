import * as yup from "yup";

export interface IOrganizationFormProps {
	onSubmit: (values: any) => Promise<void>;
}

const organizationScheme = yup.object().shape({
	name: yup.string().required("El nombre es requerido"),
	email: yup
		.string()
		.email("El email no es valido")
		.required("El email es requerido"),
	address: yup.string().required("La dirección es requerida"),
});

const initalState = {
	name: "",
	email: "",
	address: "",
};

export { organizationScheme, initalState };
