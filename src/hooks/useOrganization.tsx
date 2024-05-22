import { useState } from "react";
import { IOrganization } from "../utils/types";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:8080/api/v1/organizations";
const ENDPOINT_SAVE = "/save";

const useOrganization = () => {
	const [organization, setOrganization] = useState<IOrganization>();
	const [organizationList, setOrganizationList] = useState<IOrganization[]>(
		[]
	);
	const [loading, setLoading] = useState<boolean>(false);

	const saveOrganization = async (
		organization: IOrganization
	): Promise<boolean> => {
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
				toast.success("Organization saved successfully");
				return true;
			} else {
				const errorData = await response.json();
				toast.error("Error: " + errorData.message);
				return false;
			}
		} catch (error) {
			console.error("Error saving organization", error);
			toast.error("Unknown error saving organization");
			return false;
		} finally {
			setLoading(false);
		}
	};

	return { saveOrganization };
};

export default useOrganization;
