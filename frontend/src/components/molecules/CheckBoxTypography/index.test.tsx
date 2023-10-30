import { render } from "@testing-library/react";
import CheckBoxTypography from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";

describe("CheckBoxTypography", () => {
  test("renders the component with the provided value", () => {
    const value = "All status";
    const { getByText } = render(<ThemeProvider theme={theme}><CheckBoxTypography label={value} /></ThemeProvider>);
    const textElement = getByText(value);
    expect(textElement).toBeInTheDocument();
  });

  test("applies the custom text color when provided", () => {
    const value = "All status";
    const textColor = "red";
    const { getByText } = render(
      <ThemeProvider theme={theme}>
      <CheckBoxTypography label={value} labelColor={textColor} />
      </ThemeProvider>
    );
    const textElement = getByText(value);
    expect(textElement).toHaveStyle(`color: red`);
  });
});
