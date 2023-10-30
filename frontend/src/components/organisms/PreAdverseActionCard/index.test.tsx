import React from "react";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PreAdverseActionCard from ".";
import { TO } from "../../../constants";
import * as API from "../../../utils/API";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";
jest.mock("../../../utils/API");
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");
const mockCandidateData = {
  id: 1,
  name: "John Smith",
  location: "Barrouallie",
  email: "John.smith@checkr.com",
  dob: "21-10-2002",
  phoneNo: "(555) 555-5555",
  zipcode: "94158",
  socialSecurity: "123-322-6789",
  driverLicense: "FTEST1111 (CA)",
};
const mockCandidateReports = [
  {
    id: 1,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "ENGAGE",
    status: "Clear",
    candidateId: 1,
    created_at: 1480593600,
    updated_at: 1480593600,
  },
  {
    id: 2,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "ENGAGE",
    status: "Clear",
    candidateId: 2,
    created_at: 1480852800,
    updated_at: 1480680000,
  },
  {
    id: 3,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "ENGAGE",
    status: "Consider",
    candidateId: 3,
    created_at: 1480593600,
    updated_at: 1480680000,
  },
  {
    id: 4,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "ENGAGE",
    status: "Clear",
    candidateId: 4,
    created_at: 1480593600,
    updated_at: 1480680000,
  },
  {
    id: 5,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "ENGAGE",
    status: "clear",
    candidateId: 5,
    created_at: 1480593600,
    updated_at: 1480680000,
  },
  {
    id: 6,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "ENGAGE",
    status: "Clear",
    candidateId: 6,
    created_at: 1480593600,
    updated_at: 1480680000,
  },
  {
    id: 7,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "ENGAGE",
    status: "Consider",
    candidateId: 7,
    created_at: 1480593600,
    updated_at: 1480680000,
  },
  {
    id: 8,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "-",
    status: "Consider",
    candidateId: 8,
    created_at: 1480593600,
    updated_at: 1480680000,
  },
  {
    id: 9,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "ENGAGE",
    status: "Clear",
    candidateId: 9,
    created_at: 1480593600,
    updated_at: 1480680000,
  },
  {
    id: 10,
    package: "Employee pro",
    completed_date: 1480852800,
    adjudication: "ENGAGE",
    status: "Consider",
    candidateId: 10,
    created_at: 1480593600,
    updated_at: 1480680000,
  },
];
const mockSingleReport = {
  id: 1,
  package: "Employee pro",
  completed_date: 1480852800,
  adjudication: "ENGAGE",
  status: "Clear",
  candidateId: 1,
  created_at: 1480593600,
  updated_at: 1480593600,
};
describe("PreAdverseActionCard Component", () => {
  test('renders the component with correct "To" email', () => {
    const name = "Kyle Checkr";
    const email = "Kyle@checkr.com";
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PreAdverseActionCard candidateData={mockCandidateData} />
        </ThemeProvider>
      </BrowserRouter>
    );
    jest.spyOn(API, "getCandidateById").mockResolvedValue(mockCandidateData);
    jest
      .spyOn(API, "getCandidatesReports")
      .mockResolvedValue(mockCandidateReports);
    const toElement = screen.getByText(TO);
    const emailElement = screen.getByText("John.smith@checkr.com");
    expect(toElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });

  test("displays the correct subject", () => {
    const name = "Kyle Checkr";
    const email = "Kyle@Checkr.Com";
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PreAdverseActionCard candidateData={mockCandidateData} />
        </ThemeProvider>
      </BrowserRouter>
    );

    const subjectElement = screen.getByText(
      "Pre-Adverse Action Notice - Checkr-Bpo"
    );
    expect(subjectElement).toBeInTheDocument();
  });

  test('renders the "Preview Notice" button', () => {
    const name = "Kyle Checkr";
    const email = "Kyle@Checkr.Com";
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PreAdverseActionCard candidateData={mockCandidateData} />
        </ThemeProvider>
      </BrowserRouter>
    );

    const previewButton = screen.getByText("Preview Notice");
    expect(previewButton).toBeInTheDocument();
  });

  test("displays the name in the mail salutation", () => {
    const name = "Kyle Checkr";
    const email = "Kyle@Checkr.Com";
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PreAdverseActionCard candidateData={mockCandidateData} />
        </ThemeProvider>
      </BrowserRouter>
    );

    const salutation = screen.getByText(`Dear John Smith,`);
    expect(salutation).toBeInTheDocument();
  });

  test("checks the second checkbox when clicked", () => {
    const name = "Kyle Checkr";
    const email = "Kyle@Checkr.Com";
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PreAdverseActionCard candidateData={mockCandidateData} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const secondCheckbox = screen.getAllByRole("checkbox")[1];
    fireEvent.click(secondCheckbox);

    expect(secondCheckbox).toBeChecked();
  });
  test("opens modals succesfully", async () => {
    render(
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PreAdverseActionCard candidateData={mockCandidateData} />
        </ThemeProvider>
      </BrowserRouter>
    );
    jest.spyOn(API, "getCandidateById").mockResolvedValue(mockCandidateData);
    jest
      .spyOn(API, "getCandidatesReports")
      .mockResolvedValue(mockCandidateReports);
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(3);
    fireEvent.click(checkboxes[1]);
    const prevNoticeBtn = screen.getByRole("button", {
      name: "Preview Notice",
    });
    fireEvent.click(prevNoticeBtn);
    const submitNoticeBtn = screen.getByRole("button", {
      name: "Submit Notice",
    });
    fireEvent.click(submitNoticeBtn);
  });
});
