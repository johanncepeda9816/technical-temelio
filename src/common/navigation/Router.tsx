import { Routes, Route } from "react-router-dom";
import OrganizationPage from "../../atomic/pages/home/CreateOrganizationPage";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<OrganizationPage />} />
		</Routes>
	);
};

export default Router;
