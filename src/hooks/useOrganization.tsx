import { useState } from "react";
import { IOrganization } from "../utils/types";

const BASE_URL = "http://localhost:8080/api/v1/organizations";
const ENDPOINT_SAVE = "/save";

const useOrganization = () => {
	const [organization, setOrganization] = useState<IOrganization>();
	const [organizationList, setOrganizationList] = useState<IOrganization[]>(
		[]
	);
	const [loading, setLoading] = useState<boolean>(false);

	const saveOrganization = async (organization: IOrganization) => {
		try {
			setLoading(true);
			const response = await fetch(`${BASE_URL}${ENDPOINT_SAVE}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(organization),
			});
			if (response.ok) {
				const data = await response.json();
				console.log("Organizations:", data);
			} else {
				const errorData = await response.json();
				console.error("Error:", errorData.message);
			}
		} catch (error) {
			console.error("Error saving organization", error);
		} finally {
			setLoading(false);
		}
	};

	return { saveOrganization };
};

export default useOrganization;
