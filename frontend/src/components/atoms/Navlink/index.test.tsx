import { screen, render, fireEvent } from "@testing-library/react";
import { Navlink } from ".";
import { SIGN_IN_TEXT } from "../../../constants";

describe("Navlink atom testcases", () => {
  it("Navlink component renders correctly", () => {
    render(<Navlink children={SIGN_IN_TEXT} />);
    const element = screen.getByText(SIGN_IN_TEXT);
    expect(element).toBeInTheDocument();
  });
  test("should trigger the onClick event", () => {
    const onClickMock = jest.fn();
    render(<Navlink children={SIGN_IN_TEXT} onClick={onClickMock} />);
    const element = screen.getByText(SIGN_IN_TEXT);
    fireEvent.click(element);
    expect(onClickMock).toHaveBeenCalled();
  });
});
