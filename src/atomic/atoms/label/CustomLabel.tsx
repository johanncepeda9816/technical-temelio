import { ICustomLabelProps } from "./CustomLabel.types";
import "./CustomLabel.css";

const CustomLabel = ({ label, isError = false }: ICustomLabelProps) => {
	return (
		<p className={`inputStyle ${isError ? "error" : "label"}`}>{label}</p>
	);
};

export default CustomLabel;
