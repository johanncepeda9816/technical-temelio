import StorageIcon from "@mui/icons-material/Storage";
import EmailIcon from "@mui/icons-material/Email";
import BookIcon from "@mui/icons-material/Book";
import theme from "./theme";
import { IOrganization } from "./types";

const menu = [
	{
		label: "New Organization",
		icon: <BookIcon style={{ color: theme.light }} />,
	},
	{
		label: "Email manager",
		icon: <EmailIcon style={{ color: theme.light }} />,
	},
];

const databaseMenu = [
	{
		label: "Organizations List",
		icon: <StorageIcon style={{ color: theme.light }} />,
	},
	{
		label: "Email List",
		icon: <StorageIcon style={{ color: theme.light }} />,
	},
];

const basicTemplate = `
<h2>Hi there!</h2>
<p>We are sending money to your nonprofit organization: <b>{name}</b>,</p>
<p>Below is aditional information:</p>
<ul>
	<li><strong>Email:</strong> {email}</li>
	<li><strong>Address:</strong> {address}</li>
</ul>
<p>If you have any questions, feel free to contact us.</p>
<p>Best regards,</p>
<img style="background-color:black; padding:10px" src="https://assets-global.website-files.com/6526d926c6d4abaca08ad0ff/6526d926c6d4abaca08ad13d_Temelio-Logo-Light.svg" widh="100px" height="auto"/>
<p>Temelio Team</p>

`;

const replacePlaceholders = (template: string, organization: IOrganization) => {
	return template
		.replace(/{name}/g, organization.name)
		.replace(/{email}/g, organization.email)
		.replace(/{address}/g, organization.address);
};

export { menu, databaseMenu, basicTemplate, replacePlaceholders };
