import useOrganization from "../../../hooks/useOrganization";
import OrganizationTemplate from "../../templates/OrganizationTemplate";

const HomePage = () => {
	const { saveOrganization } = useOrganization();

	return (
		<div>
			<OrganizationTemplate onSubmit={saveOrganization} />
		</div>
	);
};

export default HomePage;
