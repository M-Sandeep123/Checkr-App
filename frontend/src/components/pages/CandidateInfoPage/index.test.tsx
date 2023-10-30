import {
  screen,
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { CandidateInfoPage } from ".";
import { BrowserRouter } from "react-router-dom";
import * as API from "../../../utils/API";
jest.mock("../../../utils/API");
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
const mockCandidateCourtSearchesData = [
  {
    id: 1,
    candidateId: 1,
    courtSearchId: 1,
    status: "Clear",
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 2,
    candidateId: 1,
    courtSearchId: 2,
    status: "Clear",
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 3,
    candidateId: 1,
    courtSearchId: 3,
    status: "Consider",
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 4,
    candidateId: 1,
    courtSearchId: 4,
    status: "Clear",
    created_at: 1689422400,
    updated_at: 1689422400,
  },
  {
    id: 5,
    candidateId: 1,
    courtSearchId: 5,
    status: "Clear",
    created_at: 1689422400,
    updated_at: 1689422400,
  },
];
const mockCourtSearchesData = [
  {
    id: 1,
    name: "SSN Verification",
    created_at: 1702728000,
    updated_at: 1702728000,
  },
  {
    id: 2,
    search: "Sex Offender",
    created_at: 1702814400,
    updated_at: 1702814400,
  },
  {
    id: 3,
    search: "Global Watchlist",
    created_at: 1702900800,
    updated_at: 1702900800,
  },
  {
    id: 4,
    search: "Federal Criminal",
    created_at: 1702987200,
    updated_at: 1702987200,
  },
  {
    id: 5,
    search: "County Criminal",
    created_at: 1480593600,
    updated_at: 1480593600,
  },
];
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
describe("CandidateInfoPage test cases", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CandidateInfoPage />
      </BrowserRouter>
    );
  });
  it("on click buttons functionality works as expected", async () => {
    jest.spyOn(API, "getCandidateById").mockResolvedValue(mockCandidateData);
    jest
      .spyOn(API, "getCourtSearches")
      .mockResolvedValue(mockCourtSearchesData);
    jest
      .spyOn(API, "getCandidateCourtSearches")
      .mockResolvedValue(mockCandidateCourtSearchesData);
    jest
      .spyOn(API, "getCandidatesReports")
      .mockResolvedValue(mockCandidateReports);
    const preadvsereBtn = screen.getByRole("button", {
      name: "Pre-Adverse Action",
    });
    fireEvent.click(preadvsereBtn);
    const engageBtn = screen.getByRole("button", {
      name: "Engage",
    });
    fireEvent.click(engageBtn);
    const backBtnIcon = screen.getByRole("img", { name: "back-icon" });
    fireEvent.click(backBtnIcon);
  });
  it("navbar works as expected", async () => {
    jest.spyOn(API, "getCandidateById").mockResolvedValue(mockCandidateData);
    jest
      .spyOn(API, "getCourtSearches")
      .mockResolvedValue(mockCourtSearchesData);
    jest
      .spyOn(API, "getCandidateCourtSearches")
      .mockResolvedValue(mockCandidateCourtSearchesData);
    jest
      .spyOn(API, "getCandidatesReports")
      .mockResolvedValue(mockCandidateReports);
    const candidateNavItem = screen.getByText("Candidates");
    expect(candidateNavItem).toBeInTheDocument();
    fireEvent.click(candidateNavItem);
  });
  it("navbar works as expected", async () => {
    jest.spyOn(API, "getCandidateById").mockResolvedValue(mockCandidateData);
    jest
      .spyOn(API, "getCourtSearches")
      .mockResolvedValue(mockCourtSearchesData);
    jest
      .spyOn(API, "getCandidateCourtSearches")
      .mockResolvedValue(mockCandidateCourtSearchesData);
    jest
      .spyOn(API, "getCandidatesReports")
      .mockResolvedValue(mockCandidateReports);
    const adverseActionNavItem = screen.getByText("Adverse Actions");
    expect(adverseActionNavItem).toBeInTheDocument();
    fireEvent.click(adverseActionNavItem);
  });
});
