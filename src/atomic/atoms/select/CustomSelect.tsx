import { useState } from "react";
import Select from "react-select";
import Option from "../option/Option";
import { customStyles } from "./Select.styles";
import { ISelectProps } from "./Select.types";

const CustomSelect = ({ options }: ISelectProps) => {
	const [selectedOptions, setSelectedOptions] = useState<any>([]);

	const handleChange = (selected: any) => {
		setSelectedOptions(selected);
	};

	return (
		<Select
			closeMenuOnSelect={false}
			isMulti
			hideSelectedOptions={false}
			options={options.map((option: any) => ({
				label: option,
				value: option,
			}))}
			components={{ Option }}
			onChange={handleChange}
			styles={customStyles}
			value={selectedOptions}
		/>
	);
};

export default CustomSelect;
