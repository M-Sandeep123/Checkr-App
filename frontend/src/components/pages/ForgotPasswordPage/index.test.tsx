import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ForgotPasswordPage from ".";
import { EMAIL_PLACEHOLDER, RESET_PASSWORD_TEXT } from "../../../constants";

describe("Forgot Password page testcases", () => {
  beforeEach(() => {
    render(<BrowserRouter><ForgotPasswordPage /></BrowserRouter>);
  });
  it("ForgotPassword renders correctly", () => {
    const element = screen.getByTestId("forgot-password");
    expect(element).toBeInTheDocument();
  });
  it("test_email_valid_and_reset_password_button_enabled", () => {
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    const resetPasswordButton = screen.getByText(RESET_PASSWORD_TEXT);
    fireEvent.change(emailInput, { target: { value: "example@gmail.com" } });
    expect(resetPasswordButton).toBeEnabled();
  });
  it("test_email_invalid_and_reset_password_button_disabled", () => {
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    const resetPasswordButton = screen.getByText(RESET_PASSWORD_TEXT);
    fireEvent.change(emailInput, { target: { value: "example" } });
    expect(resetPasswordButton).toBeDisabled();
  });
});
