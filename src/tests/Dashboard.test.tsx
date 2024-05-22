import { render, screen, fireEvent } from "@testing-library/react";
import AdminDashboardPage from "../atomic/pages/dashboard/AdminDashboard";
import userEvent from "@testing-library/user-event";

test("renders AdminDashboardPage component", () => {
	render(<AdminDashboardPage />);
	expect(screen.getByTestId("drawer-container")).toBeInTheDocument();
});

test("renders Main Component in AdminDashboardPage", () => {
	render(<AdminDashboardPage />);
	expect(screen.getByTestId("main-content")).toBeInTheDocument();
});

test("renders OrganizationPage when 'New Organization' is selected", () => {
	render(<AdminDashboardPage />);
	const setCurrentOptionMock = jest.fn();
	setCurrentOptionMock("New Organization");
	expect(screen.getByTestId("organization-page")).toBeInTheDocument();
});

test("renders OrganizationPage when 'Organizations List' is selected", () => {
	render(<AdminDashboardPage />);

	const menuButton = screen.getByTestId("menu-drawer-button");
	userEvent.click(menuButton);

	const organizationsListButton = screen.getByRole("button", {
		name: "Organizations List",
	});
	userEvent.click(organizationsListButton);

	expect(screen.getByTestId("organization-list")).toBeInTheDocument();
});

test("renders OrganizationPage when 'Editor Template' is selected", () => {
	render(<AdminDashboardPage />);

	const menuButton = screen.getByTestId("menu-drawer-button");
	userEvent.click(menuButton);

	const organizationsListButton = screen.getByRole("button", {
		name: "Email manager",
	});
	userEvent.click(organizationsListButton);

	expect(screen.getByTestId("editor-template")).toBeInTheDocument();
});

test("renders OrganizationPage when 'Email List' is selected", () => {
	render(<AdminDashboardPage />);
	const menuButton = screen.getByTestId("menu-drawer-button");
	userEvent.click(menuButton);

	const emailListButton = screen.getByRole("button", {
		name: "Email List",
	});
	userEvent.click(emailListButton);
	expect(screen.getByTestId("email-list")).toBeInTheDocument();
});
