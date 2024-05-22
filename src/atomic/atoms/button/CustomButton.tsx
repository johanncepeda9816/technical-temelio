import { ICustomButtonProps } from "./CustomButton.types";
import "./CustomButton.css";
import Loader from "../loader/Loader";

const CustomButton = (props: ICustomButtonProps) => {
	const { label, onClick, loading } = props;

	if (loading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	return (
		<button className="root" onClick={onClick}>
			{label}
		</button>
	);
};

export default CustomButton;
