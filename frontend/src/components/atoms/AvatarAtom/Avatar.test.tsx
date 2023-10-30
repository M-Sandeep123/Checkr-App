import { screen, render } from "@testing-library/react";
import AvatarAtom from ".";
import ProfileAvatar from "../../../../public/assets/images/Avatar.svg";

describe("AvatarTestcases", () => {
  test("Avatar component renders correctely", () => {
    render(<AvatarAtom src={ProfileAvatar} alt="AvatarImg" />);
    const avatarImage = screen.getByAltText("AvatarImg");
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage.getAttribute("src")).toBe(ProfileAvatar);
  });
});
