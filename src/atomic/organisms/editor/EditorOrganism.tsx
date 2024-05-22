import CustomEditor from "../../molecules/editor/CustomEditor";

interface IProps {
	emailTemplate: string;
	setEmailTemplate: any;
}

const EditorOrganism = ({ emailTemplate, setEmailTemplate }: IProps) => {
	return (
		<div>
			<CustomEditor
				onChange={(text: string) => setEmailTemplate(text)}
				initialText={emailTemplate}
			/>
		</div>
	);
};

export default EditorOrganism;
