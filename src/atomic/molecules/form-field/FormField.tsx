import CustomInput from "../../atoms/input/CustomInput";
import CustomLabel from "../../atoms/label/CustomLabel";
import { IFormFieldProps } from "./FormField.types";

const FormField = (props: IFormFieldProps) => {
	const { label, errorLabel, error } = props;
	return (
		<div>
			<CustomLabel label={label} />
			<CustomInput {...props} />
			{error && errorLabel && <CustomLabel label={errorLabel} isError />}
		</div>
	);
};

export default FormField;
