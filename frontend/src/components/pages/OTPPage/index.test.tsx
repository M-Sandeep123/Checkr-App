import React from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import theme from "../../../theme/theme";
import { render, screen } from "@testing-library/react";
import OTPPage from ".";

describe("OTPPage component", () => {
  test("renders OTPPage correctly", () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <OTPPage />
      </ThemeProvider>
      </BrowserRouter>
    );
  });
});
