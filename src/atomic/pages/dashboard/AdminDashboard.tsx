import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { databaseMenu, menu } from "../../../utils/helpers";
import theme from "../../../utils/theme";
import DrawerChild from "../../organisms/drawer/DrawerChild";
import OrganizationPage from "../home/CreateOrganizationPage";

const drawerWidth = 240;

interface Props {
	window?: () => Window;
}

export default function AdminDashboardPage(props: Props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);
	const [currentOption, setCurrentOption] = useState("New Organization");
	const navigate = useNavigate();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const options = [
		{
			label: "Volver al inicio",
			icon: <ArrowBackIcon />,
			action: () => navigate("/"),
		},
		{
			label: "Cerrar Sesión",
			icon: <LogoutIcon />,
			action: async () => {},
		},
	];

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex", height: "100vh" }}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							bgcolor: theme.third,
							padding: 0,
						},
					}}
				>
					<DrawerChild
						currentOption={currentOption}
						databaseMenu={databaseMenu}
						drawerWidth={drawerWidth}
						handleDrawerToggle={handleDrawerToggle}
						setCurrentOption={setCurrentOption}
						menu={menu}
						options={options}
					/>
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							bgcolor: theme.third,
							padding: 0,
						},
					}}
					open
				>
					<DrawerChild
						currentOption={currentOption}
						databaseMenu={databaseMenu}
						drawerWidth={drawerWidth}
						handleDrawerToggle={handleDrawerToggle}
						setCurrentOption={setCurrentOption}
						menu={menu}
						options={options}
					/>
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: theme.light, p: 3 }}
			>
				<Toolbar />
				{currentOption === "New Organization" && <OrganizationPage />}
			</Box>
		</Box>
	);
}
