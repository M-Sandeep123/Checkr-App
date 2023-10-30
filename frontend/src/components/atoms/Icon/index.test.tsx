import { render, screen } from "@testing-library/react";
import Icon from ".";

const iconUrl = "/assets/images/home.svg";
const altText = "icon not found";

describe("Icon atom testcases", () => {
  test("icon renders correctly", () => {
    render(<Icon src={iconUrl} alt={altText} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", iconUrl);
    expect(img).toHaveAttribute("alt", altText);
  });
  test("icon alt text renders correctly", () => {
    render(<Icon src={iconUrl} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", "Icon not found");
  });
});
