import { StyledEngineProvider } from "@mui/styled-engine";
import { MemoryRouter } from "react-router";
import "./preview.css"
import { ThemeProvider } from "@emotion/react";
import theme from "../src/theme/theme";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <MemoryRouter initialEntries={["/"]}>
                    <Story />
                </MemoryRouter>
            </ThemeProvider>
        </StyledEngineProvider>
    ),
];
