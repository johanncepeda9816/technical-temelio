import { CSSProperties } from "react";
import theme from "../../../utils/theme";

const styles: Record<string, CSSProperties> = {
	label: { padding: 10, color: theme.error },
	error: { padding: 10 },
};

export { styles };
