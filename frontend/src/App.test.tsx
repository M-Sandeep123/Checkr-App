import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
describe("App component test cases", () => {
  it("renders App component correctly", () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </BrowserRouter>
    );
  });
});
