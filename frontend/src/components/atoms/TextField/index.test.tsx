import { render, fireEvent } from "@testing-library/react";
import CustomTextField, { PropsType } from ".";

describe("CustomTextField", () => {
    const renderCustomTextField = (props: Partial<PropsType> = {}) => {
        const defaultProps: PropsType = {
            placeholder: "Enter text...",
            height: 40,
            width: 200,
        };
        return render(<CustomTextField {...defaultProps} {...props} />);
    };

    it("renders the input field with the correct placeholder", () => {
        const placeholder = "Enter text...";
        const { getByPlaceholderText } = renderCustomTextField({ placeholder });
        const inputElement = getByPlaceholderText(placeholder);
        expect(inputElement).toBeInTheDocument();
    });

    it("triggers the onChange event correctly", () => {
        const handleChange = jest.fn();
        const { getByPlaceholderText } = renderCustomTextField({ onChange: handleChange });
        const inputElement = getByPlaceholderText("Enter text...");
        fireEvent.change(inputElement, { target: { value: "New value" } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

});
