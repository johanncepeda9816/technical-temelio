import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { databaseMenu, menu } from "../../../utils/helpers";
import theme from "../../../utils/theme";
import DrawerChild from "../../organisms/drawer/DrawerChild";
import OrganizationPage from "../home/CreateOrganizationPage";
import OrganizationListTemplate from "../../templates/organization-list/OrganizationListTemplate";
import EditorTemplate from "../../templates/editor/EditorTemplate";
import EmailListTemplate from "../../templates/email-list/EmailListTemplate";

const drawerWidth = 240;

interface Props {
	window?: () => Window;
}

export default function AdminDashboardPage(props: Props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);
	const [currentOption, setCurrentOption] = useState("New Organization");

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box
			sx={{ display: "flex", height: "100vh" }}
			data-testid="drawer-container"
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: "none" } }}
					data-testid="menu-drawer-button"
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
			<Box
				component="nav"
				sx={{
					width: { sm: drawerWidth },
					flexShrink: { sm: 0 },
					bgcolor: theme.background,
				}}
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
						options={[]}
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
						options={[]}
					/>
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: theme.background, p: 3 }}
				data-testid="main-content"
			>
				<Toolbar />
				{currentOption === "New Organization" && <OrganizationPage />}
				{currentOption === "Organizations List" && (
					<OrganizationListTemplate />
				)}
				{currentOption === "Email manager" && <EditorTemplate />}
				{currentOption === "Email List" && <EmailListTemplate />}
			</Box>
		</Box>
	);
}
