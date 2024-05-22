import { IOrganization } from "../../utils/types";
import OrganizationForm from "../organisms/create-organization/OrganizationForm";
import "./OrganizationTemplate.css";

interface IProps {
	onSubmit: (organization: IOrganization) => Promise<boolean>;
}

const OrganizationTemplate = ({ onSubmit }: IProps) => {
	return (
		<div className="organization-template">
			<main className="main-content">
				<h1>New Organization</h1>
				<OrganizationForm onSubmit={onSubmit} />
			</main>
		</div>
	);
};

export default OrganizationTemplate;
