import useOrganization from "../../../hooks/useOrganization";
import CustomSelect from "../../atoms/select/CustomSelect";
import EditorOrganism from "../../organisms/editor/EditorOrganism";

const EditorTemplate = () => {
	const { organizationList } = useOrganization();

	return (
		<div>
			<h1>Email Manager</h1>
			<EditorOrganism />
			<CustomSelect
				options={organizationList.map((item) => item.email)}
			/>
		</div>
	);
};

export default EditorTemplate;
