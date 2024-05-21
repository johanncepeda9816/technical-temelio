import { styles } from "./CustomInput.styles";
import { ICustomInputProps } from "./CustomInput.types";

const CustomInput = ({
	onChange,
	value,
	placeholder,
	type = "text",
}: ICustomInputProps) => {
	return (
		<input
			style={styles}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			type={type}
		/>
	);
};

export default CustomInput;
