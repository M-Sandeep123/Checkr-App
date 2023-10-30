import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import OTPInputSection from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";
import { fireEvent, render, screen } from "@testing-library/react";

describe("OTPInputSection component", () => {
    test("renders OTPInputSection component", () => {
        render(<BrowserRouter><ThemeProvider theme={theme}>
            <OTPInputSection />
        </ThemeProvider></BrowserRouter>)
    });
});
