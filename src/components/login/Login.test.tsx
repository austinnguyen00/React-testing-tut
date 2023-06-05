import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import React from "react";

test("username input should be rendered", () => {
	render(<Login />);
	const userInputEl = screen.getByPlaceholderText(/username/i);
	expect(userInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
	render(<Login />);
	const passwordInputEl = screen.getByPlaceholderText(/password/i);
	expect(passwordInputEl).toBeInTheDocument();
});

test("button input should be rendered", () => {
	render(<Login />);
	const buttonInputEl = screen.getByRole("button");
	expect(buttonInputEl).toBeInTheDocument();
});

test("username input should be empty", () => {
	render(<Login />);
	const userInputEl = screen.getByPlaceholderText(
		/username/i,
	) as HTMLInputElement;
	expect(userInputEl.value).toBe("");
});

test("password input should be empty", () => {
	render(<Login />);
	const passwordInputEl = screen.getByPlaceholderText(
		/password/i,
	) as HTMLInputElement;
	expect(passwordInputEl.value).toBe("");
});

test("button should be disabled", () => {
	render(<Login />);
	const buttonEl = screen.getByRole("button");
	expect(buttonEl).toBeDisabled();
});

test("error message should not be visible", () => {
	render(<Login />);
	const errorEl = screen.getByTestId("error");
	expect(errorEl).not.toBeVisible();
});

test("username input should change", () => {
	render(<Login />);
	const userInputEl = screen.getByPlaceholderText(
		/username/i,
	) as HTMLInputElement;
	const testValue = "test";

	fireEvent.change(userInputEl, { target: { value: testValue } });
	expect(userInputEl.value).toBe(testValue);
});

test("password input should change", () => {
	render(<Login />);
	const passwordInputEl = screen.getByPlaceholderText(
		/password/i,
	) as HTMLInputElement;
	const testValue = "test";

	fireEvent.change(passwordInputEl, { target: { value: testValue } });
	expect(passwordInputEl.value).toBe(testValue);
});

test("button should not be disabled when inputs exist", () => {
	render(<Login />);
	const userInputEl = screen.getByPlaceholderText(
		/username/i,
	) as HTMLInputElement;
	const passwordInputEl = screen.getByPlaceholderText(
		/password/i,
	) as HTMLInputElement;
	const buttonEl = screen.getByRole("button");

	const testValue = "test";

	fireEvent.change(userInputEl, { target: { value: testValue } });
	fireEvent.change(passwordInputEl, { target: { value: testValue } });

	expect(buttonEl).not.toBeDisabled();
});

test("loading should not be rendered", () => {
	render(<Login />);
	const buttonEl = screen.getByRole("button");
	expect(buttonEl).not.toHaveTextContent("Please wait...");
});

test("loading should be rendered when click", () => {
	render(<Login />);
	const buttonEl = screen.getByRole("button");
	const userInputEl = screen.getByPlaceholderText(
		/username/i,
	) as HTMLInputElement;
	const passwordInputEl = screen.getByPlaceholderText(
		/password/i,
	) as HTMLInputElement;

	const testValue = "test";

	fireEvent.change(userInputEl, { target: { value: testValue } });
	fireEvent.change(passwordInputEl, { target: { value: testValue } });
	fireEvent.click(buttonEl);

	expect(buttonEl).toHaveTextContent(/Please wait.../i);
});
