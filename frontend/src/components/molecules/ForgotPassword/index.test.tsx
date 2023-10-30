import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ForgotPassword } from ".";
import {
  EMAIL_PLACEHOLDER,
  FORGOT_PASSWORD_PAGE_GO_BACK_TEXT,
  NO_ISSUES,
  EMAIL,
  FORGOT_PASSWORD,
  RESET_PASSWORD_TEXT,
} from "../../../constants";

describe("Forgot Password molecule testcases", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    );
  });
  it("ForgotPassword renders correctly", () => {
    const element = screen.getByTestId("forgot-password");
    expect(element).toBeInTheDocument();
  });
  it("test_correct_text_displayed", () => {
    expect(screen.getByText(FORGOT_PASSWORD)).toBeInTheDocument();
    expect(
      screen.getByText(FORGOT_PASSWORD_PAGE_GO_BACK_TEXT)
    ).toBeInTheDocument();
    expect(screen.getByText(NO_ISSUES)).toBeInTheDocument();
    expect(screen.getByText(EMAIL)).toBeInTheDocument();
    expect(screen.getByText(RESET_PASSWORD_TEXT)).toBeInTheDocument();
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
  it("clicking on back icon", () => {
    const backIcon = screen.getByRole("img");
    expect(backIcon).toBeInTheDocument();
    fireEvent.click(backIcon);
  });
  it("clicking on submit button", () => {
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    const resetPasswordButton = screen.getByText(RESET_PASSWORD_TEXT);
    fireEvent.change(emailInput, { target: { value: "example@gmail.com" } });
    expect(resetPasswordButton).toBeEnabled();
    fireEvent.click(resetPasswordButton);
  });
});
