import { CustomTable } from "../../organisms/table/TableOrganism";
import { columns } from "./List.types";

const OrganizationListTemplate = () => {
	return (
		<div>
			<h1>Organization List</h1>
			<CustomTable
				columns={columns}
				rows={[]}
				headerName={""}
				onPageChange={undefined}
			/>
		</div>
	);
};

export default OrganizationListTemplate;
