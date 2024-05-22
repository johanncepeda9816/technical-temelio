import { IOrganization } from "../../utils/types";
import OrganizationForm from "../organisms/create-organization/OrganizationForm";
import "./OrganizationTemplate.css";

interface IProps {
	onSubmit: (organization: IOrganization) => Promise<void>;
}

const OrganizationTemplate = ({ onSubmit }: IProps) => {
	return (
		<div className="organization-template">
			<header className="header">
				<h1>Header Content</h1>
			</header>
			<main className="main-content">
				<h1>New Organization</h1>
				<OrganizationForm onSubmit={onSubmit} />
			</main>
			<footer className="footer">
				<p>Footer Content</p>
			</footer>
		</div>
	);
};

export default OrganizationTemplate;
