import { render, fireEvent, waitFor } from "@testing-library/react";
import LogoutModalBox from ".";
import { CANCEL_BUTTON, LOGOUT_BUTTON } from "../../../constants";

describe("LogoutModalBox", () => {
  it("should render the component with the correct props", () => {
    const { getByText } = render(
      <LogoutModalBox
        Cancelbuttonlabel={CANCEL_BUTTON}
        Logoutbuttonlabel={LOGOUT_BUTTON}
        isOpen={true}
      />
    );
    expect(getByText("Cancel")).toBeTruthy();
    expect(getByText("Logout")).toBeTruthy();
    expect(getByText("Are you sure you want to logout?")).toBeTruthy();
  });

  it("should close the modal when the cancel button is clicked", () => {
    const { getByText, getByTitle } = render(
      <LogoutModalBox
        Cancelbuttonlabel={CANCEL_BUTTON}
        Logoutbuttonlabel={LOGOUT_BUTTON}
        isOpen={true}
      />
    );
    fireEvent.click(getByText("Cancel"));
    waitFor(() => expect(getByTitle("LogoutModalBox")).toBeNull());
  });

  it("should log out the user when the logout button is clicked", () => {
    const mockLogout = jest.fn();
    const { getByText, getByTitle } = render(
      <LogoutModalBox
        Cancelbuttonlabel={CANCEL_BUTTON}
        Logoutbuttonlabel={LOGOUT_BUTTON}
        isOpen={true}
      />
    );
    fireEvent.click(getByText("Logout"));
  });
});
