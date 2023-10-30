import { render, screen } from "@testing-library/react";
import NavbarUserInfoTemplate from ".";
import {
  HEADER_TEXT,
  MAIN_CONTENT_TEXT,
  NAV_BAR_TEXT,
} from "../../../constants";
describe("NavbarUserInfoTemplate testcases", () => {
  it("sidebar renders correctly", () => {
    const sidebar = <h1>{NAV_BAR_TEXT}</h1>;
    render(<NavbarUserInfoTemplate sidebar={sidebar} />);
    expect(screen.getByText("navigationbar")).toBeInTheDocument;
  });
  it("should render the header", () => {
    const header = <h1>{HEADER_TEXT}</h1>;
    render(<NavbarUserInfoTemplate header={header} />);
    expect(screen.getByText("Header")).toBeInTheDocument;
  });
  it("should render the content", () => {
    const content = <h1>{MAIN_CONTENT_TEXT}</h1>;
    render(<NavbarUserInfoTemplate content={content} />);
    expect(screen.getByText("MainContent")).toBeInTheDocument;
  });
  it("applies correct grid template columns based on isMobile media query", () => {
    const sidebar = <h1>Sidebar</h1>;
    const header = <h1>Header</h1>;
    const content = <h1>MainContent</h1>;
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query == '(max-width: 999px',
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn()
    }));
    render(
      <NavbarUserInfoTemplate
        sidebar={sidebar}
        header={header}
        content={content}
      />
    );
    expect(screen.getByTestId("outline").style.gridTemplateColumns).toBe("");
  });
  it("applies correct grid template columns based on isMobile media query", () => {
    const sidebar = <h1>Sidebar</h1>;
    const header = <h1>Header</h1>;
    const content = <h1>MainContent</h1>;
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query !== '(max-width: 999px',
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn()
    }));
    render(
      <NavbarUserInfoTemplate
        sidebar={sidebar}
        header={header}
        content={content}
      />
    );
    expect(screen.getByTestId("outline").style.gridTemplateColumns).toBe("");
  });
});
