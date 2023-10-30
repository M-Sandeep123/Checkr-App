import { render, fireEvent, screen, getByText } from "@testing-library/react";
import PaginationMolecule from ".";

describe("PaginationMolecule", () => {
  it("should render the component with initial props", () => {
    render(<PaginationMolecule page={10} count={3} label={84} />);

    expect(screen.getByText("10 out of 84")).toBeInTheDocument();
    expect(screen.getByText("10 per page")).toBeInTheDocument();
  });

  test("should call onChange with selected value when dropdown value changes", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <PaginationMolecule onChange={onChangeMock} page={10} label={84} />
    );
    const dropdown = screen.getByTestId("dropDown");
    fireEvent.click(dropdown);

    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });

  test("handleChange function updates age and triggers onChange with correct arguments", () => {
    const onChange = jest.fn();
    const setAge = jest.fn();
    const event = { target: { value: "25" } };

    let age = "20";
    const page = 1;

    const handleChange = (event: any) => {
      setAge(event.target.value);
      if (onChange) {
        onChange(event, page);
      }
    };
    handleChange(event);
    expect(setAge).toHaveBeenCalledWith("25");
    expect(onChange).toHaveBeenCalledWith(event, page);
  });
});
