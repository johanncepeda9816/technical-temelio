import { CustomTable } from "../../organisms/table/TableOrganism";

const OrganizationListTemplate = () => {
	return (
		<div>
			<h1>Organization List</h1>
			<CustomTable
				columns={[]}
				rows={[]}
				headerName={""}
				onPageChange={undefined}
			/>
		</div>
	);
};

export default OrganizationListTemplate;
