import { screen, render, fireEvent } from "@testing-library/react";
import { MuiCheckbox } from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";

describe("MuiCheckbox test cases", () => {
  test("should render the checkbox component", () => {
    render(<ThemeProvider theme={theme}><MuiCheckbox /></ThemeProvider>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  test("should trigger the onChange event", () => {
    const onChange = jest.fn();
    render(<ThemeProvider theme={theme}><MuiCheckbox onChange={onChange} /></ThemeProvider>);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });
});
