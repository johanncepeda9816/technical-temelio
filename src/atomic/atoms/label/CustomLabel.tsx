import { styles } from "./CustomLabel.styles";
import { ICustomLabelProps } from "./CustomLabel.types";

const CustomLabel = ({ label, isError }: ICustomLabelProps) => {
	return <p style={isError ? styles.error : styles.label}>{label}</p>;
};

export default CustomLabel;
