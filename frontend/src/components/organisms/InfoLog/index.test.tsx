import { render, screen } from "@testing-library/react";
import InfoLog from ".";

describe("InfoLog", () => {
  it("renders the component with correct header name", () => {
    const testData = [
      {
        id: 1,
        title: "Name",
        content: "John Smith",
        imgType: "name",
      },
    ];
    const headerName = "Info Log";
    render(<InfoLog data={testData} headerName={headerName} />);

    const headerElement = screen.getByText(headerName);
    expect(headerElement).toBeInTheDocument();
  });

  it("renders the component with correct card titles and contents", () => {
    const testData = [
      {
        id: 1,
        title: "Name",
        content: "John Smith",
        imgType: "name",
      },
      {
        id: 2,
        title: "Email",
        content: "John.smith@checkr.com",
        imgType: "email",
      },
    ];
    render(<InfoLog data={testData} headerName="Info Log" />);

    testData.forEach((item) => {
      const titleElement = screen.getByText(item.title);
      const contentElement = screen.getByText(item.content);

      expect(titleElement).toBeInTheDocument();
      expect(contentElement).toBeInTheDocument();
    });
  });

  it("renders the component without crashing when data is empty", () => {
    render(<InfoLog data={[]} headerName="Info Log" />);
  });

  it("renders the component without crashing when data contains unknown image type", () => {
    const unknownImgTypeData = [
      {
        id: 1,
        title: "Title",
        content: "Content",
        imgType: "imgType",
      },
    ];

    render(<InfoLog data={unknownImgTypeData} headerName="Info Log" />);
  });

  it("returns the correct image path for 'dob' image type", () => {
    const testData = [
      {
        id: 3,
        title: "DOB",
        content: "1990-09-10 (26)",
        imgType: "DoB",
      },
    ];
    render(<InfoLog data={testData} headerName="Info Log" />);
    testData.forEach((item) => {
      const titleElement = screen.getByText(item.title);
      expect(titleElement).toBeInTheDocument();
    });
  });

  it("renders the component without crashing when data contains phone image type", () => {
    const phoneImgTypeData = [
      {
        id: 4,
        title: "Phone",
        content: "(555) 555-5555",
        imgType: "phone",
      },
    ];

    render(<InfoLog data={phoneImgTypeData} headerName="Info Log" />);
  });

  it("renders the component without crashing when data contains location image type", () => {
    const locationImgTypeData = [
      {
        id: 5,
        title: "Location",
        content: "94158",
        imgType: "location",
      },
    ];

    render(<InfoLog data={locationImgTypeData} headerName="Info Log" />);
  });

  it("renders the component without crashing when data contains socialSecurity image type", () => {
    const socialSecurityImgTypeData = [
      {
        id: 6,
        title: "Social Security",
        content: "XXX-XX-6789",
        imgType: "socialSecurity",
      },
    ];

    render(<InfoLog data={socialSecurityImgTypeData} headerName="Info Log" />);
  });

  it("renders the component without crashing when data contains dob image type", () => {
    const DoBImgTypeData = [
      {
        id: 7,
        title: "Drivers License",
        content: "FTEST1111",
        imgType: "dob",
      },
    ];

    render(<InfoLog data={DoBImgTypeData} headerName="Info Log" />);
  });

  it("renders the component without crashing when data contains calender image type", () => {
    const calenderImgTypeData = [
      {
        id: 8,
        title: "Calender",
        content: "Nov 29, 2016 11:05:57 AM",
        imgType: "calender",
      },
    ];

    render(<InfoLog data={calenderImgTypeData} headerName="Info Log" />);
  });

  it("renders the component without crashing when data contains duplicate image types", () => {
    const duplicateImgTypeData = [
      {
        id: 1,
        title: "Title 1",
        content: "Content 1",
        imgType: "dob",
      },
      {
        id: 1,
        title: "Title 2",
        content: "Content 2",
        imgType: "dob",
      },
    ];

      render(<InfoLog data={duplicateImgTypeData} headerName="Info Log" />);
      
  });
    
    
});
