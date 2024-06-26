import { useEffect, useState } from "react";
import { IOrganization } from "../utils/types";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:8080/api/v1/organizations";
const ENDPOINT_SAVE = "/save";
const ENDPOINT_GET_LIST = "/list";

const useOrganization = () => {
	const [organizationList, setOrganizationList] = useState<IOrganization[]>(
		[]
	);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getOrganizations();
	}, []);

	const getOrganizations = async (): Promise<IOrganization[]> => {
		try {
			setLoading(true);
			const response = await fetch(`${BASE_URL}${ENDPOINT_GET_LIST}`);
			if (response.ok) {
				const data = await response.json();
				const formattedData = data.map((item: IOrganization) => {
					return { ...item, id: item.email };
				});
				setOrganizationList(formattedData);
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

	return { saveOrganization, loading, organizationList };
};

export default useOrganization;
