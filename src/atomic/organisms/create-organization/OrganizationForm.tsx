import { Formik } from "formik";
import FormField from "../../molecules/form-field/FormField";
import { initalState, organizationScheme } from "./OrganizationForm.types";
import CustomButton from "../../atoms/button/CustomButton";
import "./OrganizationForm.css";
import { IOrganization } from "../../../utils/types";

interface IProps {
	onSubmit: (organization: IOrganization) => Promise<boolean>;
}

const OrganizationForm = ({ onSubmit }: IProps) => {
	return (
		<Formik
			initialValues={initalState}
			onSubmit={async (values, { resetForm }) => {
				const success = await onSubmit(values as IOrganization);
				if (success) resetForm();
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
				isSubmitting,
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
						disabled={isSubmitting}
					/>
					<FormField
						label="Email"
						onChange={handleChange("email")}
						value={values.email}
						placeholder={"example@example.com"}
						error={touched.email && errors.email !== undefined}
						errorLabel={errors.email}
						onBlur={handleBlur("email")}
						disabled={isSubmitting}
					/>
					<FormField
						label="Address"
						onChange={handleChange("address")}
						value={values.address}
						placeholder={"San Francisco, CA, USA"}
						error={touched.address && errors.address !== undefined}
						errorLabel={errors.address}
						onBlur={handleBlur("address")}
						disabled={isSubmitting}
					/>
					<CustomButton
						label="Save Organization"
						onClick={handleSubmit}
						loading={isSubmitting}
					/>
				</div>
			)}
		</Formik>
	);
};

export default OrganizationForm;
