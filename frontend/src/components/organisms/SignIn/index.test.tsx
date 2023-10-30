import { fireEvent, render, screen } from "@testing-library/react";
import { Signin } from ".";
import {
  EMAIL_PLACEHOLDER_TEXT,
  PASSWORD_PLACEHOLDER,
} from "../../../constants";
jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn(),
  }),
}));
import * as API from "../../../utils/API";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";
jest.mock("../../../utils/API");
jest.mock("react-router", () => ({
  useNavigate: jest.fn(),
}));
const mockUserData = [
  {
    id: 1,
    firstName: "James",
    lastName: "Rodriguez",
    userName: "James Rodriguez",
    email: "james@gmail.com",
    password: "James@123",
    dob: 906201869,
    companyName: "Checkr",
  },
  {
    email: "saicharan@gmail.com",
    password: "Saicharan@31",
    id: 2,
  },
];
describe("SignIn section testcases", () => {
  it("component renders correctly", () => {
    render(<ThemeProvider theme={theme}><Signin /></ThemeProvider>);
    const signupSection = screen.getByTestId("signin-section");
    expect(signupSection).toBeInTheDocument();
  });

  it("changing email and password input fields and submit", () => {
    render(<ThemeProvider theme={theme}><Signin /></ThemeProvider>);
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER_TEXT);
    const passwordInput = screen.getByPlaceholderText(PASSWORD_PLACEHOLDER);
    expect(passwordInput).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: "saicharan@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "Saicharan@123" } });
    const siginBtn = screen.getByRole("button", { name: "Sign in" });
    expect(siginBtn).toBeEnabled();
    fireEvent.click(siginBtn);
  });

  it("toggling password icon to show and hide password", () => {
    render(<ThemeProvider theme={theme}><Signin /></ThemeProvider>);
    const passwordInput = screen.getByPlaceholderText(PASSWORD_PLACEHOLDER);
    fireEvent.change(passwordInput, { target: { value: "Saicharan@123" } });
    const passwordVisibilityOffIcon = screen.getByAltText(
      "close-icon"
    );
    fireEvent.click(passwordVisibilityOffIcon);
  });

  it("test login with google and github", () => {
    const mockLoginWithRedirect = jest.fn();
    jest.mock("@auth0/auth0-react", () => ({
      useAuth0: () => ({
        loginWithRedirect: mockLoginWithRedirect,
      }),
    }));
    render(<ThemeProvider theme={theme}><Signin /></ThemeProvider>);
    const loginWithGoogle = screen.getByTestId("with-google");
    fireEvent.click(loginWithGoogle);
    expect(mockLoginWithRedirect).toHaveBeenCalledTimes(0);
    const loginWithGitHub = screen.getByTestId("with-github");
    fireEvent.click(loginWithGitHub);
    expect(mockLoginWithRedirect).toHaveBeenCalledTimes(0);
  });

  it("test onClick forgot password", () => {
    const navigate = jest.fn();
    require("react-router").useNavigate.mockReturnValue(navigate);
    render(<ThemeProvider theme={theme}><Signin /></ThemeProvider>);
    const getEleByText = screen.getByText("Forgot Password?");
    fireEvent.click(getEleByText);
    expect(navigate).toHaveBeenCalledWith("/forgot-password");
  });

  it("test onClick signup ", () => {
    const navigate = jest.fn();
    require("react-router").useNavigate.mockReturnValue(navigate);
    render(<ThemeProvider theme={theme}><Signin /></ThemeProvider>);
    const getEleByText = screen.getByText("Sign up");
    fireEvent.click(getEleByText);
    expect(navigate).toHaveBeenCalledWith("/signup");
  });
  it("clicking on submit btn", () => {
    render(<ThemeProvider theme={theme}><Signin /></ThemeProvider>);
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER_TEXT);
    const passwordInput = screen.getByPlaceholderText(PASSWORD_PLACEHOLDER);
    expect(passwordInput).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: "james@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "James@123" } });
    const siginBtn = screen.getByRole("button", { name: "Sign in" });
    expect(siginBtn).toBeEnabled();
    fireEvent.click(siginBtn);
  });
  it("entering wrong details", () => {
    jest.spyOn(API, "getUsers").mockResolvedValue(mockUserData);
    render(<ThemeProvider theme={theme}><Signin /></ThemeProvider>);
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER_TEXT);
    const passwordInput = screen.getByPlaceholderText(PASSWORD_PLACEHOLDER);
    expect(passwordInput).toBeInTheDocument();
    fireEvent.change(emailInput, { target: { value: "james@gmail" } });
    fireEvent.change(passwordInput, { target: { value: "James@" } });
    fireEvent.change(emailInput, { target: { value: "james@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "James@12" } });
    const siginBtn = screen.getByRole("button", { name: "Sign in" });
    expect(siginBtn).toBeEnabled();
    fireEvent.click(siginBtn);
    fireEvent.change(emailInput, { target: { value: "james@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "James@123" } });
    expect(siginBtn).toBeEnabled();
    fireEvent.click(siginBtn);
  });
});
