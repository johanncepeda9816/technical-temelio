import { CSSProperties } from "react";
import theme from "../../../utils/theme";

const inputStyle: CSSProperties = {
	margin: 0,
	padding: 0,
};

const styles: Record<string, CSSProperties> = {
	error: {
		...inputStyle,
		padding: 10,
		color: theme.error,
	},
	label: {
		...inputStyle,
		padding: 10,
	},
};

export { styles };
