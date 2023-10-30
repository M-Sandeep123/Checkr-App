import { render, screen } from "@testing-library/react";
import SignInPage from ".";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";

describe("signIn page", () => {
  it("renders the component with correct data", () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SignInPage />
        </ThemeProvider>
      </BrowserRouter>
    );
    const getHeaderText = screen.getByText("Email");
    expect(getHeaderText).toBeInTheDocument();
  });
});
