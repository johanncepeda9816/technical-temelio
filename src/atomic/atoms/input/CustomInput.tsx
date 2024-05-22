import { ICustomInputProps } from "./CustomInput.types";
import "./CustomInput.css";

const CustomInput = ({
	onChange,
	value,
	placeholder,
	type = "text",
	onBlur,
	disabled,
}: ICustomInputProps) => {
	return (
		<input
			className="input"
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			type={type}
			onBlur={onBlur}
			maxLength={100}
			disabled={disabled}
		/>
	);
};

export default CustomInput;
