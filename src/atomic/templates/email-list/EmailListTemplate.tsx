import { useEffect } from "react";
import useEmailManager from "../../../hooks/useEmailManager";
import { CustomTable } from "../../organisms/table/TableOrganism";
import { columns } from "./EmailList.types";
import { RemoveRedEye } from "@mui/icons-material";

const EmailListTemplate = () => {
	const { getEmailList, emailList } = useEmailManager();

	useEffect(() => {
		getEmailList();
	}, []);

	return (
		<div>
			<h1>Organization List</h1>
			<CustomTable
				columns={columns}
				rows={emailList}
				headerName={""}
				onPageChange={undefined}
				actions={[
					{
						label: "View",
						action: (id: string) => {},
					},
				]}
			/>
		</div>
	);
};

export default EmailListTemplate;
