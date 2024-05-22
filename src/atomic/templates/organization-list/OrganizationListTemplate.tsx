import useOrganization from "../../../hooks/useOrganization";
import { CustomTable } from "../../organisms/table/TableOrganism";
import { columns } from "./List.types";

const OrganizationListTemplate = () => {
	const { organizationList } = useOrganization();

	return (
		<div>
			<h1>Organization List</h1>
			<CustomTable
				columns={columns}
				rows={organizationList}
				headerName={""}
				onPageChange={undefined}
			/>
		</div>
	);
};

export default OrganizationListTemplate;
