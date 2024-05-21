import { Formik } from "formik";
import FormField from "../../molecules/form-field/FormField";
import { initalState, organizationScheme } from "../OrganizationForm.types";
import CustomButton from "../../atoms/button/CustomButton";
import "./OrganizationForm.css";

const OrganizationForm = () => {
	return (
		<Formik
			initialValues={initalState}
			onSubmit={(values) => {
				console.log("Values:", values);
			}}
			validationSchema={organizationScheme}
			validateOnBlur
		>
			{({
				handleChange,
				handleBlur,
				handleSubmit,
				values,
				errors,
				touched,
			}) => (
				<div className="form-inner">
					<FormField
						label="Name"
						onChange={handleChange("name")}
						value={values.name}
						placeholder={"Safety Corp"}
						error={touched.name && errors.name !== undefined}
						errorLabel={errors.name}
						onBlur={handleBlur("name")}
					/>
					<FormField
						label="Email"
						onChange={handleChange("email")}
						value={values.email}
						placeholder={"example@example.com"}
						error={touched.email && errors.email !== undefined}
						errorLabel={errors.email}
						onBlur={handleBlur("email")}
					/>
					<FormField
						label="Address"
						onChange={handleChange("address")}
						value={values.address}
						placeholder={"San Francisco, CA, USA"}
						error={touched.address && errors.address !== undefined}
						errorLabel={errors.address}
						onBlur={handleBlur("address")}
					/>
					<CustomButton
						label="Save Organization"
						onClick={handleSubmit}
					/>
				</div>
			)}
		</Formik>
	);
};

export default OrganizationForm;
