import { screen, render, fireEvent } from "@testing-library/react";
import { PreAdviceActionModal } from ".";

describe("PreAdviceActionModal testcases", () => {
  const modalProps = {
    open: true,
    chargesSelected: ["Assault Domestic Violence"],
    userData: {
      email: "John.smith@checkr.com",
      name: "John Smith",
    },
    onClose: jest.fn(),
  };
  beforeEach(() => {
    render(<PreAdviceActionModal onSubmit={()=>{}} {...modalProps} />);
  });
  it("test_render_modal_with_correct_props", () => {
    const modal = screen.getByTestId("preadvice-action-tracking-modal");
    expect(modal).toBeInTheDocument();
  });
  it("test_handles_onClose_function", () => {
    const closeButton = screen.getByAltText(/close/i);
    fireEvent.click(closeButton);
    expect(modalProps.onClose).toHaveBeenCalled();
  });
});
