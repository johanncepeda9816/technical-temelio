import StorageIcon from "@mui/icons-material/Storage";
import BookIcon from "@mui/icons-material/Book";
import theme from "./theme";

const menu = [
	{
		label: "New Organization",
		icon: <BookIcon style={{ color: theme.light }} />,
	},
];

const databaseMenu = [
	{
		label: "Organizations List",
		icon: <StorageIcon style={{ color: theme.light }} />,
	},
];

export { menu, databaseMenu };
