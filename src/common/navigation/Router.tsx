import { Routes, Route } from "react-router-dom";
import OrganizationPage from "../../atomic/pages/home/CreateOrganizationPage";
import AdminDashboardPage from "../../atomic/pages/dashboard/AdminDashboard";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<AdminDashboardPage />} />
		</Routes>
	);
};

export default Router;
