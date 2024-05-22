import useOrganization from "../../../hooks/useOrganization";
import CustomSelect from "../../atoms/select/CustomSelect";
import EditorOrganism from "../../organisms/editor/EditorOrganism";
import CustomButton from "../../atoms/button/CustomButton";
import useEmailManager from "../../../hooks/useEmailManager";
import { useState } from "react";

const EditorTemplate = () => {
	const { organizationList } = useOrganization();
	const { sentMassiveEmail, emailTemplate, setEmailTemplate } =
		useEmailManager();
	const [selectedEmails, setSelectedEmails] = useState<string[]>([]);

	const onSent = async () => {
		const selectedOrganizations = organizationList.filter((item) => {
			return selectedEmails.includes(item.email);
		});
		const ok = await sentMassiveEmail(emailTemplate, selectedOrganizations);
		if (ok) setSelectedEmails([]);
	};

	return (
		<div style={{ paddingBottom: "50px" }}>
			<h1>Email Editor</h1>
			<EditorOrganism
				emailTemplate={emailTemplate}
				setEmailTemplate={setEmailTemplate}
			/>
			<h1>Send email to:</h1>
			<div style={{ maxWidth: "500px" }}>
				<CustomSelect
					options={organizationList.map((item) => item.email)}
					onChange={(selected: string[]) =>
						setSelectedEmails(selected)
					}
					selectedOptions={selectedEmails}
				/>
			</div>

			<CustomButton label="Send Massive Emails" onClick={onSent} />
		</div>
	);
};

export default EditorTemplate;
