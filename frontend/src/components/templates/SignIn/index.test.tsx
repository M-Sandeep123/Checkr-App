import { render, screen } from "@testing-library/react";
import SignInTemplate from "../SignIn";
import TypographyAtom from "../../atoms/TypographyAtom";

describe("SignInTemplate", () => {
  it("renders children when passed", () => {
    render(<SignInTemplate><TypographyAtom children="Test Children"/></SignInTemplate>);
    const childrenElement = screen.getByText("Test Children");
    expect(childrenElement).toBeInTheDocument();
  });

  it("renders default children when not passed", () => {
    render(<SignInTemplate />);
    const defaultChildrenElement = screen.getByText("Children");
    expect(defaultChildrenElement).toBeInTheDocument();
  });

  it("renders the image with correct dimensions", () => {
    render(<SignInTemplate />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("width", "292");
    expect(imageElement).toHaveAttribute("height", "316");
  });
});
