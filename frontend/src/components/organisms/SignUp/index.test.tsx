import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SignUp } from ".";
import {
  EMAIL_PLACEHOLDER_TEXT,
  PASSWORD_PLACEHOLDER,
} from "../../../constants";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";

describe("SignUp section testcases", () => {
  it("component renders correctly", () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SignUp />
        </ThemeProvider>
      </BrowserRouter>
    );
    const signupSection = screen.getByTestId("signup-section");
    expect(signupSection).toBeInTheDocument();
  });
  it("changing email,password and confirmpassword input fields and submit", () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SignUp />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER_TEXT);
    const passwordInputs = screen.getAllByPlaceholderText(PASSWORD_PLACEHOLDER);
    expect(passwordInputs).toHaveLength(2);
    const passwordInput = passwordInputs[0];
    const confirmpasswordInput = passwordInputs[1];
    fireEvent.change(emailInput, { target: { value: "saicharan@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "Saicharan@123" } });
    fireEvent.change(confirmpasswordInput, {
      target: { value: "Saicharan@123" },
    });
    const signUpBtn = screen.getByRole("button", { name: "Sign up" });
    expect(signUpBtn).toBeEnabled();
    fireEvent.click(signUpBtn);
  });
  it("toggling password icons to show ans hide password", () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SignUp />
        </ThemeProvider>
      </BrowserRouter>
    );
    const passwordInputs = screen.getAllByPlaceholderText(PASSWORD_PLACEHOLDER);
    expect(passwordInputs).toHaveLength(2);
    const passwordInput = passwordInputs[0];
    fireEvent.change(passwordInput, { target: { value: "Saicharan@123" } });
    const passwordVisibilityOffIcon = screen.getByAltText("password-eye-off");
    fireEvent.click(passwordVisibilityOffIcon);
    const confirmpasswordInput = passwordInputs[1];
    fireEvent.change(confirmpasswordInput, {
      target: { value: "Saicharan@123" },
    });
    const confirmPasswordVisibilityOffIcon = screen.getByAltText(
      "confirm-password-eye-off"
    );
    fireEvent.click(confirmPasswordVisibilityOffIcon);
  });

  it('clicking the "Sign up" link triggers loginWithRedirect function', () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SignUp />
        </ThemeProvider>
      </BrowserRouter>
    );

    const signInLink = screen.getByTestId("nav-link");
    fireEvent.click(signInLink);
  });
  it("toggling password icons to show ans hide password", () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SignUp />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER_TEXT);
    fireEvent.change(emailInput, { target: { value: "saicharan@gmail" } });
    fireEvent.change(emailInput, { target: { value: "dummy@gmail.com" } });
    const passwordInputs = screen.getAllByPlaceholderText(PASSWORD_PLACEHOLDER);
    expect(passwordInputs).toHaveLength(2);
    const passwordInput = passwordInputs[0];
    fireEvent.change(passwordInput, { target: { value: "Saicharan" } });
    fireEvent.change(passwordInput, { target: { value: "Dummy@123" } });
    const signUpBtn = screen.getByRole("button",{name:"Sign up"})
    fireEvent.click(signUpBtn);
  });
});
