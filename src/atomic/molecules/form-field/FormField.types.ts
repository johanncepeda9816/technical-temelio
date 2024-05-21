import { ICustomInputProps } from "../../atoms/input/CustomInput.types";

export interface IFormFieldProps extends ICustomInputProps {
	label: string;
	error?: boolean;
	errorLabel?: string;
}
