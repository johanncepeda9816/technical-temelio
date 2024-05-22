import { GridRowsProp } from "@mui/x-data-grid";

export interface TableProps {
	columns: Column[];
	rows: GridRowsProp;
	pageSize?: number;
	headerName: string;
	actions?: IAction[];
	loading?: boolean;
	onPageChange: any;
	buttonRef?: string;
	buttonRefClick?: any;
}

export interface Column {
	field: string;
	headerName: string;
	flex?: number;
	type?: "string" | "number" | "date" | "dateTime";
}

export interface IAction {
	label: string;
	action: (item: any) => void;
	visible?: false;
}
