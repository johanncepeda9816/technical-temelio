import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import theme from "../../../utils/theme";
import { IProps } from "./CustomListItem.types";

const CustomListItem = (props: IProps) => {
	const { setCurrentOption, currentOption, item, icon } = props;

	return (
		<ListItem
			disablePadding
			onClick={() => {
				setCurrentOption(item.label);
			}}
			className={currentOption === item.label ? "itemActive" : "item"}
		>
			<ListItemButton>
				<ListItemIcon color={theme.light}>{icon}</ListItemIcon>
				<ListItemText
					primary={item.label}
					style={{ color: theme.light }}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default CustomListItem;
