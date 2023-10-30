import { screen, render } from "@testing-library/react";
import Card from ".";
import UserInfoImage from "../../../../public/assets/images/user_info_image.svg";
import { NAME_PLACEHOLDER, USER_NAME } from "../../../constants";

describe("Card molecule testcases", () => {
  it("Card renders correctly", () => {
    render(
      <Card
        imageUrl={UserInfoImage}
        title={NAME_PLACEHOLDER}
        content={USER_NAME}
      />
    );
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();
  });
});
