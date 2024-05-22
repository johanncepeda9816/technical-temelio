import useOrganization from "../../../hooks/useOrganization";
import OrganizationTemplate from "../../templates/organization/OrganizationTemplate";

const OrganizationPage = () => {
	const { saveOrganization } = useOrganization();

	return (
		<div data-testid="organization-page">
			<OrganizationTemplate onSubmit={saveOrganization} />
		</div>
	);
};

export default OrganizationPage;
