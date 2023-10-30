import { render } from "@testing-library/react";
import CustomChip from ".";

describe("CustomChip", () => {
    it("renders the chip component with the correct label", () => {
        const label = "CONSIDER";
        const { getByText } = render(<CustomChip label={label} />);
        const chipElement = getByText(label);
        expect(chipElement).toBeInTheDocument();
    });
    it("renders the chip component with the correct label", () => {
        const label = "ADVERSE ACTION";
        const { getByText } = render(<CustomChip label={label} />);
        const chipElement = getByText(label);
        expect(chipElement).toBeInTheDocument();
    });

    it("renders the chip component with the correct variant", () => {
        const variant = "outlined";
        const { container } = render(<CustomChip variant={variant} />);
        const chipElement = container.querySelector(".MuiChip-outlined");
        expect(chipElement).toBeInTheDocument();
    });

    it("renders the chip component with the correct size", () => {
        const size = "small";
        const { container } = render(<CustomChip size={size} />);
        const chipElement = container.querySelector(".MuiChip-sizeSmall");
        expect(chipElement).toBeInTheDocument();
    });

    it("renders the chip component with the correct color and background color for 'CONSIDER'", () => {
        const label = "SCHEDULE";
        const { getByTestId } = render(<CustomChip label={label} />);
        const chipElement = getByTestId("custom-chip");
        expect(chipElement).toBeInTheDocument();
        expect(chipElement).toHaveStyle("backgroundColor: #F2F4FC");
    });

    it("renders the chip component with the correct color and background color for 'CLEAR'", () => {
        const label = "CLEAR";
        const { getByTestId } = render(<CustomChip label={label} />);
        const chipElement = getByTestId("custom-chip");
        expect(chipElement).toBeInTheDocument();
        expect(chipElement).toHaveStyle("backgroundColor: #F2FCFB");
    });

    it("renders the chip component with the correct color and background color for 'ENGAGE'", () => {
        const label = "ENGAGE";
        const { getByTestId } = render(<CustomChip label={label} />);
        const chipElement = getByTestId("custom-chip");
        expect(chipElement).toBeInTheDocument();
        expect(chipElement).toHaveStyle("backgroundColor: #F2FCFB");
    });
});
