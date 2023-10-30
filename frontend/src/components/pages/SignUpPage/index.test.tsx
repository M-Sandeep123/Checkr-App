import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUpPage from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";

describe("test weather the page is renders or not", () => {
  it("renders the component with correct data", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SignUpPage />
        </ThemeProvider>
      </BrowserRouter>
      );
    const getHeaderText = screen.getByText("Email");
    expect(getHeaderText).toBeInTheDocument();
  });
});
