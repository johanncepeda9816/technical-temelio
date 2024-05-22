import { useEffect, useState } from "react";
import { IEmail, IOrganization } from "../utils/types";
import { toast } from "react-toastify";
import { basicTemplate, replacePlaceholders } from "../utils/helpers";

const BASE_URL = "http://localhost:8080/api/v1/organizations";
const ENDPOINT_SAVE = "/save";
const ENDPOINT_GET_LIST = "/list";

const useEmailManager = () => {
	const [emailList, setEmailList] = useState<IEmail[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [emailTemplate, setEmailTemplate] = useState<string>(basicTemplate);

	const getEmailList = async (): Promise<IEmail[]> => {
		try {
			setLoading(true);
			const response = await fetch(`${BASE_URL}${ENDPOINT_GET_LIST}`);
			if (response.ok) {
				const data = await response.json();
				const formattedData = data.map((item: IEmail) => {
					return { ...item, id: item.organization.email };
				});
				setEmailList(formattedData);
				return data;
			} else {
				const errorData = await response.json();
				toast.error("Error: " + errorData.message);
				return [];
			}
		} catch (error) {
			console.error("Error getting organizations", error);
			toast.error("Unknown error getting organizations");
			return [];
		} finally {
			setLoading(false);
		}
	};

	const sentMassiveEmail = async (
		template: string,
		organizationList: IOrganization[]
	): Promise<boolean> => {
		try {
			setLoading(true);

			const formatted = organizationList.map((item) => {
				return {
					organization: item,
					template: replacePlaceholders(template, item),
				};
			});

			console.log("Formatted", formatted);

			// const response = await fetch(`${BASE_URL}${ENDPOINT_SAVE}`, {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: JSON.stringify(organization),
			// });
			// if (response.ok) {
			// 	toast.success("Organization saved successfully");
			// 	return true;
			// } else {
			// 	const errorData = await response.json();
			// 	toast.error("Error: " + errorData.message);
			// 	return false;
			// }
			return false;
		} catch (error) {
			console.error("Error saving organization", error);
			toast.error("Unknown error saving organization");
			return false;
		} finally {
			setLoading(false);
		}
	};

	return {
		sentMassiveEmail,
		setEmailTemplate,
		getEmailList,
		loading,
		emailList,
		emailTemplate,
	};
};

export default useEmailManager;
