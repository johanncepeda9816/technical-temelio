import { ChangeEvent } from "react";
import CustomInput from "../../atoms/input/CustomInput";

const HomePage = () => {
	return (
		<div>
			<div></div>
			<h1>This is a home page</h1>
			<CustomInput
				onChange={function (e: ChangeEvent<HTMLInputElement>): void {
					throw new Error("Function not implemented.");
				}}
				value={""}
				placeholder={"Ingrea un texto"}
			/>
		</div>
	);
};

export default HomePage;
