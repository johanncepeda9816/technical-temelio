const customStyles = {
	control: (base: any) => ({
		...base,
		border: "1px solid #ccc",
		boxShadow: "none",
		"&:hover": {
			border: "1px solid #aaa",
		},
	}),
	menu: (base: any) => ({
		...base,
		borderRadius: 0,
		marginTop: 0,
	}),
	menuList: (base: any) => ({
		...base,
		padding: 0,
	}),
};

export { customStyles };
