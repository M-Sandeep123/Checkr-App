import { screen, render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AdverseActionPage } from ".";
import * as API from "../../../utils/API";
jest.mock("../../../utils/API");
const mockCandidatesData = [
  {
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
  },
  {
    id: 2,
    name: "Serene",
    location: "Vänersborg",
    email: "serene@checkr.com",
    dob: 652968000,
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicemse: "FTEST1111 (CA)",
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 3,
    name: "Walsh",
    location: "Sukamanah",
    email: "walsh@checkr.com",
    dob: 652968000,
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicemse: "FTEST1111 (CA)",
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 4,
    name: "Maurizia",
    location: "Sukamanah",
    email: "maurizia@checkr.com",
    dob: 652968000,
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicemse: "FTEST1111 (CA)",
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 5,
    name: "Kendre",
    location: "Beutong Ateuh",
    email: "kendre@checkr.com",
    dob: 652968000,
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicemse: "FTEST1111 (CA)",
    created_at: 1480589069,
    updated_at: 1480675469,
  },
];
const mockActionsData = [
  {
    id: 1,
    candidateId: 1,
    "pre_notice-date": 1645531200,
    post_notice_date: 1645531200,
    actionStatus: "Scheduled",
    action_update_time: 1480766400,
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 2,
    candidateId: 2,
    "pre_notice-date": 1647172800,
    post_notice_date: 1647172800,
    actionStatus: "Scheduled",
    action_update_time: 1480766400,
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 3,
    candidateId: 3,
    "pre_notice-date": 1656763200,
    post_notice_date: 1656763200,
    actionStatus: "Scheduled",
    action_update_time: 1480766400,
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 4,
    candidateId: 4,
    "pre_notice-date": 1645358400,
    post_notice_date: 1645358400,
    actionStatus: "Scheduled",
    action_update_time: 1480766400,
    created_at: 1480589069,
    updated_at: 1480675469,
  },
  {
    id: 5,
    candidateId: 5,
    "pre_notice-date": 1652961600,
    post_notice_date: 1652961600,
    actionStatus: "Scheduled",
    action_update_time: 1480766400,
    created_at: 1480589069,
    updated_at: 1480675469,
  },
];
describe("AdverseActionPage test cases", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AdverseActionPage />
      </BrowserRouter>
    );
  });
  test("renders AdverseAction component with fetched data", async () => {
    jest.spyOn(API, "getAllAdverseActions").mockResolvedValue(mockActionsData);
    jest.spyOn(API, "getAllCandidates").mockResolvedValue(mockCandidatesData);
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });
  test("renders AdverseAction component with fetched data", async () => {
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });
  test("renders columns with correct data", async () => {
    jest.spyOn(API, "getAllAdverseActions").mockResolvedValue(mockActionsData);
    jest.spyOn(API, "getAllCandidates").mockResolvedValue(mockCandidatesData);
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
    const nameColumnData = screen.getByText(/name/i);
    expect(nameColumnData).toBeInTheDocument();
    expect(nameColumnData.tagName).toBe("SPAN");
    const activeColumnData = screen.getByText(/STATUS/i);
    expect(activeColumnData).toBeInTheDocument();
    expect(activeColumnData.tagName).toBe("SPAN");
  });
});
