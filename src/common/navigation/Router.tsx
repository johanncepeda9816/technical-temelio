import { Routes, Route } from "react-router-dom";
import HomePage from "../../atomic/pages/home/HomePage";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};

export default Router;
