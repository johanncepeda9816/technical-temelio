import {
	Toolbar,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import CustomListItem from "../../molecules/dashboard/CustomListItem";
import theme from "../../../utils/theme";

interface IProps {
	databaseMenu: any[];
	drawerWidth: number;
	handleDrawerToggle: any;
	setCurrentOption: any;
	currentOption: string;
	menu: any[];
	options: any[];
}

const DrawerChild = (props: IProps) => {
	const { databaseMenu, setCurrentOption, currentOption, menu, options } =
		props;
	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<List className={"listItems"}>
					{menu.map((item, index) => (
						<CustomListItem
							key={index}
							item={item}
							setCurrentOption={setCurrentOption}
							currentOption={currentOption}
							icon={item.icon}
						/>
					))}
				</List>
			</List>
			<Divider />

			<List className={"listItems"}>
				{databaseMenu.map((item, index) => (
					<CustomListItem
						key={index}
						item={item}
						setCurrentOption={setCurrentOption}
						currentOption={currentOption}
						icon={item.icon}
					/>
				))}
			</List>
			<Divider />
		</div>
	);
};

export default DrawerChild;
