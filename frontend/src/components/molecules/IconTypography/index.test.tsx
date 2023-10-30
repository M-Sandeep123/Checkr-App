import { fireEvent, render ,screen} from "@testing-library/react";
import IconTypography from ".";

describe("IconTypography", () => {
  it("renders the component with label and icon", () => {
    const props = {
      label: "Hello World",
      src: "path/to/icon.png",
      alt: "Icon",
    };
    const { getByText, getByAltText } = render(<IconTypography {...props} onClick={()=>{}}/>);

    const labelElement = getByText(props.label);
    const iconElement = getByAltText(props.alt);

    expect(labelElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("src", props.src);
  });

  it("renders the component without alt prop", () => {
    const props = {
      label: "Hello World",
      src: "static/media/public/assets/images/home.svg",
    };
    const { getByText, queryByAltText } = render(<IconTypography {...props} onClick={()=>{}}/>);

    const labelElement = getByText(props.label);
    const iconElement = queryByAltText("");

    expect(labelElement).toBeInTheDocument();
    expect(iconElement).not.toBeInTheDocument();
  });
  it("onclick icon tests correctly",()=>{
    const handleClick = jest.fn();
    render(<IconTypography label={""} src={""} onClick={handleClick}/>)
    const element = screen.getByRole("img");
    fireEvent.click(element);
  })
  it("onclick icon when fn is not provided",()=>{
    render(<IconTypography label={""} src={""} onClick={()=>{}}/>)
    const element = screen.getByRole("img");
    fireEvent.click(element);
  })
});
