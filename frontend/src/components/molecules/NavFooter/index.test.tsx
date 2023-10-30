import { fireEvent, render, screen } from "@testing-library/react";
import NavFooter from ".";
import avatarImage from "../../../../public/assets/images/Avatar.svg";
import iconImage from "../../../../public/assets/images/Back.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { DEFAULT_EMAIL } from "../../../constants";

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    logout: jest.fn(),
  }),
}));

describe("NavFooter Component", () => {
  test("renders NavFooter component with avatar and username", () => {
    const avatarAlt = "Avatar";
    const userName = "James Rodriguez";
    const avatarSx = { width: "100%", height: "100%" };
    const userNameSx = { color: "black" };

    const { getByAltText, getByText } = render(
      <NavFooter
        avatarSrc={avatarImage}
        avatarAlt={avatarAlt}
        userName={userName}
        avatarSx={avatarSx}
        userNameSx={userNameSx}
        userNameVariant={"heading1"}
        emailVariant={"caption2"}
        email={"James.co"}
        emailSx={{ fontWeight: "bold" }}
        iconSrc={iconImage}
        iconAlt={"IconBack"}
      />
    );

    const avatar = getByAltText(avatarAlt);
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", avatarImage);

    const computedAvatarStyles = getComputedStyle(avatar);
    expect(computedAvatarStyles.width).toBe(avatarSx.width);
    expect(computedAvatarStyles.height).toBe(avatarSx.height);

    const userNameElement = getByText(userName);
    expect(userNameElement).toBeInTheDocument();

    const computedUserNameStyles = getComputedStyle(userNameElement);
    expect(computedUserNameStyles.color).toBe(userNameSx.color);
  });

  test("renders NavFooter component with email and icon", () => {
    const email = "James.co";
    const emailSx = { fontWeight: "700" };
    const iconSrc = { iconImage };
    const iconAlt = "IconBack";
    const iconStyle = { fill: "blue" };

    const { getByText, getByAltText } = render(
      <NavFooter
        email={email}
        emailSx={emailSx}
        iconSrc={iconImage}
        iconAlt={iconAlt}
        iconStyle={iconStyle}
        avatarSrc={avatarImage}
        avatarAlt={"avatarImg"}
        userNameVariant={"heading1"}
        userName={"James Rodriguez"}
        emailVariant={"caption2"}
      />
    );

    const emailElement = getByText(email);
    expect(emailElement).toBeInTheDocument();

    const computedEmailStyles = getComputedStyle(emailElement);
    expect(computedEmailStyles.fontWeight).toBe(emailSx.fontWeight);

    const icon = getByAltText(iconAlt);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", iconImage);

    const computedIconStyles = getComputedStyle(icon);
    expect(computedIconStyles.fill).toBe(iconStyle.fill);
  });

  test("test NavFooter onclick logout icon", () => {
    const email = DEFAULT_EMAIL;
    const emailSx = { fontWeight: "700" };
    const iconAlt = "IconBack";
    const iconStyle = { fill: "blue" };

    const { getByAltText } = render(
      <NavFooter
        email={email}
        emailSx={emailSx}
        iconSrc={iconImage}
        iconAlt={iconAlt}
        iconStyle={iconStyle}
        avatarSrc={avatarImage}
        avatarAlt={"avatarImg"}
        userNameVariant={"heading1"}
        userName={"James Rodriguez"}
        emailVariant={"caption2"}
      />
    );
    const icon = getByAltText(iconAlt);
    fireEvent.click(icon);
    const getText = screen.getByText("Confirm Logout");
    expect(getText).toBeInTheDocument();
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);
    expect(useAuth0().logout).toHaveBeenCalledTimes(0);
  });
});
