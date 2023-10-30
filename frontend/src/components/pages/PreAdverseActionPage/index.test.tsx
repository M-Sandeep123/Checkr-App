import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import PreAdverseActionCardPage from "./";
import { DEFAULT_EMAIL, DEFAULT_USERNAME } from "../../../constants";
import * as API from "../../../utils/API";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";
jest.mock("../../../utils/API");
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
const mockCandidateData = {
  id: 1,
  name: "John Smith",
  location: "Barrouallie",
  email: "John.smith@checkr.com",
  dob: 652968000,
  phoneNo: "(555) 555-5555",
  zipcode: 94158,
  socialSecurity: "123-322-6789",
  driverLicemse: "FTEST1111 (CA)",
  created_at: 1480589069,
  updated_at: 1480675469,
};
describe("PreAdverseActionCardPage", () => {
  test("renders navbar with correct data", async () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
        <PreAdverseActionCardPage />
        </ThemeProvider>
      </MemoryRouter>
    );
    jest
      .spyOn(API, "getCandidatesReports")
      .mockResolvedValue(mockCandidateReports);
    jest.spyOn(API, "getCandidateById").mockResolvedValue(mockCandidateData);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();

    const userNameElement = screen.getByText(DEFAULT_USERNAME);
    expect(userNameElement).toBeInTheDocument();

    const emailElement = screen.getByText(DEFAULT_EMAIL);
    expect(emailElement).toBeInTheDocument();
  });

  test("simulates click on log out icon", async () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
        <PreAdverseActionCardPage />
        </ThemeProvider>
      </MemoryRouter>
    );
    jest
      .spyOn(API, "getCandidatesReports")
      .mockResolvedValue(mockCandidateReports);
    jest.spyOn(API, "getCandidateById").mockResolvedValue(mockCandidateData);
    const handlePreviewClickMock = jest.fn();
    const logoutIconElement = screen.getByAltText("logout");
    userEvent.click(logoutIconElement);

    expect(handlePreviewClickMock).toHaveBeenCalledTimes(0);
  });
  it("clicking back icon",async()=>{
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
        <PreAdverseActionCardPage />
        </ThemeProvider>
      </MemoryRouter>
    );
    jest
      .spyOn(API, "getCandidatesReports")
      .mockResolvedValue(mockCandidateReports);
    const backBtnIcon = screen.getByRole("img", { name: "back-icon" });
    fireEvent.click(backBtnIcon);
  })
});
