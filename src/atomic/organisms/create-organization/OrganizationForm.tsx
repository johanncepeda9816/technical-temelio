import { Formik } from "formik";
import FormField from "../../molecules/form-field/FormField";
import { initalState, organizationScheme } from "../OrganizationForm.types";

const OrganizationForm = () => {
	return (
		<Formik
			initialValues={initalState}
			onSubmit={(values) => {
				console.log("Values:", values);
			}}
			validationSchema={organizationScheme}
		>
			{({ handleChange, handleSubmit, values, errors, touched }) => (
				<div>
					<FormField
						label="Nombre"
						onChange={handleChange("name")}
						value={values.name}
						placeholder={"Safety Corp"}
						error={touched.name && errors.name !== undefined}
						errorLabel={errors.name}
					/>
				</div>
			)}
		</Formik>
	);
};

export default OrganizationForm;
