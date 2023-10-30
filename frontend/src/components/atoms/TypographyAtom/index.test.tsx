import { render } from "@testing-library/react";
import TypographyAtom from ".";

describe("TypographyAtom component", () => {
  test("renders typography with provided label", () => {
    const label = "Hello, world!";
    const { getByText } = render(<TypographyAtom children={label} />);
    const typographyElement = getByText(label);
    expect(typographyElement).toBeInTheDocument();
  });
});
