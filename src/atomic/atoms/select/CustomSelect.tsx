import { useState } from "react";
import Select from "react-select";
import Option from "../option/Option";
import { customStyles } from "./Select.styles";
import { ISelectProps } from "./Select.types";

const CustomSelect = ({ options, selectedOptions, onChange }: ISelectProps) => {
	const [selected, setSelected] = useState<any>(selectedOptions);
	const handleChange = (selected: any) => {
		setSelected(selected);
		onChange(selected.map((item: any) => item.value));
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
			value={selected}
		/>
	);
};

export default CustomSelect;
