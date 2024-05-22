import { Routes, Route } from "react-router-dom";
import AdminDashboardPage from "../../atomic/pages/dashboard/AdminDashboard";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<AdminDashboardPage />} />
		</Routes>
	);
};

export default Router;
