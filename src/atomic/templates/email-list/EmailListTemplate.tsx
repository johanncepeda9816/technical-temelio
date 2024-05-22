import { useEffect, useState } from "react";
import useEmailManager from "../../../hooks/useEmailManager";
import { CustomTable } from "../../organisms/table/TableOrganism";
import { columns } from "./EmailList.types";
import { RemoveRedEye } from "@mui/icons-material";
import { IEmail } from "../../../utils/types";
import CustomModal from "../../molecules/modal/CustomModal";

const EmailListTemplate = () => {
	const { getEmailList, emailList } = useEmailManager();
	const [template, setTemplate] = useState<string>();

	useEffect(() => {
		getEmailList();
	}, []);

	return (
		<div data-testid="email-list">
			<h1>Organization List</h1>
			<CustomTable
				columns={columns}
				rows={emailList}
				headerName={""}
				onPageChange={undefined}
				actions={[
					{
						label: "View",
						action: (item: IEmail) => {
							setTemplate(item.template);
						},
					},
				]}
			/>

			<CustomModal
				isOpen={template !== undefined}
				onClose={() => setTemplate(undefined)}
			>
				<div dangerouslySetInnerHTML={{ __html: template ?? "" }}></div>
			</CustomModal>
		</div>
	);
};

export default EmailListTemplate;
