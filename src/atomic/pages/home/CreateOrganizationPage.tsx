import useOrganization from "../../../hooks/useOrganization";
import OrganizationTemplate from "../../templates/OrganizationTemplate";

const OrganizationPage = () => {
	const { saveOrganization } = useOrganization();

	return <OrganizationTemplate onSubmit={saveOrganization} />;
};

export default OrganizationPage;
