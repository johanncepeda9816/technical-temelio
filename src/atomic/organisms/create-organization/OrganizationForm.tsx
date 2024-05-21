import { Formik } from "formik";

const OrganizationForm = () => {
	<Formik
		initialValues={{}}
		onSubmit={(values) => {
			console.log("Values:", values);
		}}
	>
		{({
			handleBlur,
			handleChange,
			handleSubmit,
			values,
			errors,
			touched,
		}) => <div></div>}
	</Formik>;
};

export default OrganizationForm;
