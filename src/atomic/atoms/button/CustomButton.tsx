import { ICustomButtonProps } from "./CustomButton.types";
import "./CustomButton.css";

const CustomButton = (props: ICustomButtonProps) => {
	const { label, onClick } = props;
	return (
		<button className="root" onClick={onClick}>
			{label}
		</button>
	);
};

export default CustomButton;
