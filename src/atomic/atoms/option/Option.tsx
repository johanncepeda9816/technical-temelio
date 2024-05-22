import { components } from "react-select";

interface IProps {
	isSelected: boolean;
	label: string;
}

const Option = (props: IProps | any) => {
	const { isSelected, label } = props;
	return (
		<components.Option {...props}>
			<input
				type="checkbox"
				checked={props.isSelected}
				onChange={() => null}
			/>{" "}
			<label>{props.label}</label>
		</components.Option>
	);
};
export default Option;
