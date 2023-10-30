import { render, screen, fireEvent } from "@testing-library/react";
import InputTypography from ".";


describe("InputTypography", () => {
  it("renders the label and input correctly", () => {
    render(
      <InputTypography
        variant="heading1"
        height="50px"
        width="200px"
        placeholder="Enter value"
        border={1}
        bradius={5}
        bcolor="red"
        bgcolor="white"
        label="Name"
        onChange={() => { } }
        typographyVariant={{ fontWeight: "bold" }} 
        style={{}}/>
    );

    const labelElement = screen.getByText("Name");
    const inputElement = screen.getByPlaceholderText("Enter value");

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("calls the onChange callback when input value changes", () => {
    const onChangeMock = jest.fn();
    render(
      <InputTypography
        variant="body1"
        height="40px"
        width="300px"
        placeholder="Search"
        label="Search"
        onChange={onChangeMock}
        style={{}}      
        />
    );

    const inputElement = screen.getByPlaceholderText("Search");
    fireEvent.change(inputElement, { target: { value: "Hello" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "Hello" }),
      })
    );
  });
});
