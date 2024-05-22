import OrganizationForm from "../organisms/create-organization/OrganizationForm";
import "./OrganizationTemplate.css";

const OrganizationTemplate = () => {
	return (
		<div className="organization-template">
			<header className="header">
				<h1>Header Content</h1>
			</header>
			<main className="main-content">
				<OrganizationForm />
			</main>
			<footer className="footer">
				<p>Footer Content</p>
			</footer>
		</div>
	);
};

export default OrganizationTemplate;
