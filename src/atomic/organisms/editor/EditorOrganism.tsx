import { useState } from "react";
import CustomButton from "../../atoms/button/CustomButton";
import CustomEditor from "../../molecules/editor/CustomEditor";

const EditorOrganism = () => {
	const [emailTemplate, setEmailTemplate] = useState<string>(`
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

`);

	return (
		<div>
			<CustomEditor
				onChange={(text: string) => setEmailTemplate(text)}
				initialText={emailTemplate}
			/>
			<CustomButton label="Sent" onClick={() => {}} />
		</div>
	);
};

export default EditorOrganism;
