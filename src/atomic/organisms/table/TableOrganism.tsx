import { Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Table.styles.css";
import CustomButton from "../../atoms/button/CustomButton";
import { TableProps } from "./Table.types";

export const CustomTable = ({
	columns,
	rows,
	pageSize = 5,
	actions,
	loading = false,
	buttonRef,
	buttonRefClick,
}: TableProps) => {
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
	const [openMenuId, setOpenMenuId] = useState<null | string>(null);
	const [paginationModel, setPaginationModel] = useState({
		pageSize: pageSize,
		page: 0,
	});

	const handleMenuClick = (
		event: React.MouseEvent<HTMLButtonElement>,
		id: string
	) => {
		setMenuAnchorEl(event.currentTarget);
		setOpenMenuId(id);
	};

	const handleClose = () => {
		setMenuAnchorEl(null);
		setOpenMenuId(null);
	};

	const columnsWithRenderCell: GridColDef[] = columns.map((column) => ({
		...column,
		headerClassName: "columnHeader",
		renderCell: (params) => {
			return (
				<>
					<span className={"rowItemText"}>{params.value}</span>
				</>
			);
		},
	}));

	const rowsWithActions = actions
		? rows.map((item, index) => ({
				...item,
				action: (
					<Box>
						<IconButton
							onClick={(e) =>
								handleMenuClick(e, item.id.toString())
							}
							color="primary"
						>
							<MoreVertIcon />
						</IconButton>
						<Menu
							anchorEl={menuAnchorEl}
							open={openMenuId === item.id.toString()}
							onClose={handleClose}
						>
							{actions.map((option, index) => (
								<MenuItem
									disabled={loading}
									onClick={() => {
										option.action(item);
										handleClose();
									}}
									key={index}
								>
									{option.label}
								</MenuItem>
							))}
						</Menu>
					</Box>
				),
		  }))
		: rows;

	return (
		<Grid
			container
			style={{
				height: 600,
			}}
		>
			{buttonRef && (
				<Box sx={{ position: "absolute", right: "30px", top: "110px" }}>
					<CustomButton onClick={buttonRefClick} label={buttonRef} />
				</Box>
			)}
			<DataGrid
				className={"table"}
				rows={rowsWithActions}
				columns={columnsWithRenderCell}
				pageSizeOptions={[25]}
				pagination
				paginationModel={paginationModel}
				onPaginationModelChange={setPaginationModel}
				loading={loading}
			/>
		</Grid>
	);
};
