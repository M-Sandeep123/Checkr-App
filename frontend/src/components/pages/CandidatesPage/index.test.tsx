import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/theme";
import { CandidatesPage } from ".";
import { EXPORT_BUTTON_LABEL, NAV_LISTS } from "../../../constants";
import * as API from "../../../utils/API";
jest.mock("../../../utils/API");
const mockReportsData = [
  {
    id: 1,
    packageName: "Employee pro",
    reportAdjudication: null,
    reportStatus: "clear",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 1,
  },
  {
    id: 2,
    packageName: "Employee pro",
    reportAdjudication: "engage",
    reportStatus: "clear",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 2,
  },
  {
    id: 3,
    packageName: "Employee pro",
    reportAdjudication: "adverseaction",
    reportStatus: "consider",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 3,
  },
  {
    id: 4,
    packageName: "Employee pro",
    reportAdjudication: "engage",
    reportStatus: "clear",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 4,
  },
  {
    id: 5,
    packageName: "Employee pro",
    reportAdjudication: "adverseaction",
    reportStatus: "clear",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 5,
  },
  {
    id: 6,
    packageName: "Employee pro",
    reportStatus: "clear",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 6,
  },
  {
    id: 7,
    packageName: "Employee pro",
    reportStatus: "consider",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 7,
  },
  {
    id: 8,
    packageName: "Employee pro",
    reportStatus: "consider",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 8,
  },
  {
    id: 9,
    packageName: "Employee pro",
    reportStatus: "clear",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 9,
  },
  {
    id: 10,
    packageName: "Employee pro",
    reportStatus: "consider",
    completedAt: "2023-07-25T12:23:21",
    createdAt: "2023-07-25T12:23:21",
    updatedAt: "2023-07-25T12:23:21",
    candidateId: 10,
  },
];
const mockCandidatesData = [
  {
    id: 1,
    name: "John Smith",
    location: "Barrouallie",
    email: "John.smith@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
  {
    id: 2,
    name: "Serene",
    location: "VÃ¤nersborg",
    email: "serene@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
  {
    id: 3,
    name: "Walsh",
    location: "Sukamanah",
    email: "walsh@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
  {
    id: 4,
    name: "Maurizia",
    location: "Sukamanah",
    email: "maurizia@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
  {
    id: 5,
    name: "Kendre",
    location: "Beutong Ateuh",
    email: "kendre@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
  {
    id: 6,
    name: "Erastus",
    location: "HÃ¶viyn Am",
    email: "erastus@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
  {
    id: 7,
    name: "Jereme",
    location: "SharÃ¯ngol",
    email: "jereme@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
  {
    id: 8,
    name: "John Smith",
    location: "Lianyun",
    email: "johnsmith@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
  {
    id: 9,
    name: "Cari",
    location: "TaboÃ£o da Serra",
    email: "cari@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
  {
    id: 10,
    name: "Kimble",
    location: "VeselÃ­ nad Moravou",
    email: "kimble@checkr.com",
    dob: "1990-06-19T18:30:00.000+00:00",
    phoneNo: "(555) 555-5555",
    zipcode: 94158,
    socialSecurity: "123-322-6789",
    driverLicense: "FTEST1111 (CA)",
  },
];
const mockUsersData = [
  {
    id: 1,
    userName: "James Rodriguez",
    password: "James@123",
    firstName: "James",
    lastName: "Rodriguez",
    email: "James.co",
    dob: "1990-06-20",
    companyName: "Checkr",
  },
  {
    id: 8,
    userName: "",
    password: "Saicharan@31",
    firstName: "",
    lastName: "",
    email: "saicharan@gmail.com",
    dob: "1990-06-20",
    companyName: "Checkr",
  },
  {
    id: 9,
    userName: "",
    password: "Arifa@123",
    firstName: "",
    lastName: "",
    email: "arifa@gmail.com",
    dob: "1990-06-20",
    companyName: "Checkr",
  },
  {
    id: 10,
    userName: null,
    password: "Sainikhil@123",
    firstName: null,
    lastName: null,
    email: "sainikhil@gmail.com",
    dob: null,
    companyName: "Checkr",
  },
  {
    id: 11,
    userName: "",
    password: "Password@123",
    firstName: "",
    lastName: "",
    email: "saicharan.chetpelly@zemosolabs.com",
    dob: "1990-06-20",
    companyName: "Checkr",
  }
];
describe("Candidates page test cases", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CandidatesPage />
        </BrowserRouter>
      </ThemeProvider>
    );
  });
  it("header works as expected", async () => {
    const exportBtn = screen.getByText(EXPORT_BUTTON_LABEL);
    expect(exportBtn).toBeInTheDocument();
    fireEvent.click(exportBtn);
    const crossIcon = screen.getByAltText("Close-icon");
    fireEvent.click(crossIcon);
    fireEvent.click(exportBtn);
  });
  it("navbar works as expected", async () => {
    const candidateNavItem = screen.getByTestId(NAV_LISTS[1].title);
    expect(candidateNavItem).toBeInTheDocument();
    fireEvent.click(candidateNavItem);
  });
  it("navbar works as expected", async () => {
    const adverseActionNavItem = screen.getByTestId(NAV_LISTS[2].title);
    expect(adverseActionNavItem).toBeInTheDocument();
    fireEvent.click(adverseActionNavItem);
  });
  test("renders Candidates component with fetched data", async () => {
    jest.spyOn(API, "getAllCandidates").mockResolvedValue(mockCandidatesData);

    jest.spyOn(API, "getCandidatesReports").mockResolvedValue(mockReportsData);
    await waitFor(() => {
      expect(screen.getByTestId("data-table")).toBeInTheDocument();
    });
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });
  test("renders columns with correct data", async () => {
    jest.spyOn(API, "getAllCandidates").mockResolvedValue(mockCandidatesData);

    jest.spyOn(API, "getCandidatesReports").mockResolvedValue(mockReportsData);
    await waitFor(() => {
      expect(screen.getByTestId("data-table")).toBeInTheDocument();
    });
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
    const nameColumnData = screen.getByText(/name/i);
    expect(nameColumnData).toBeInTheDocument();
    expect(nameColumnData.tagName).toBe("SPAN");
    const activeColumnData = screen.getByText(/STATUS/i);
    expect(activeColumnData).toBeInTheDocument();
    expect(activeColumnData.tagName).toBe("SPAN");
  });
  it("generating token through google signin", async () => {
    jest.spyOn(API, "getUsers").mockResolvedValue(mockUsersData);
    jest.mock("@auth0/auth0-react", () => ({
      useAuth0: () => ({
        user: {
          given_name: "Sai Charan",
          family_name: "Chetpelly",
          nickname: "saicharan.chetpelly",
          name: "Sai Charan Chetpelly",
          picture:
            "https://lh3.googleusercontent.com/a/AAcHTte9StptTJ32XuxH7PCoIyvTsUFX0VdiY9MuyU0254bg=s96-c",
          locale: "en",
          updated_at: "2023-08-06T17:01:47.173Z",
          email: "saicharan.chetpelly@zemosolabs.com",
          email_verified: true,
          sub: "google-oauth2|109240394770328938738",
        },
      }),
    }));
    await waitFor(() => {
      expect(screen.getByTestId("data-table")).toBeInTheDocument();
    });
  });
  it("generating token through google signin", async () => {
    jest.spyOn(API, "getUsers").mockResolvedValue(mockUsersData);
    jest.mock("@auth0/auth0-react", () => ({
      useAuth0: () => ({
        user: {
          given_name: "Sai Charan",
          family_name: "Chetpelly",
          nickname: "saicharan.chetpelly",
          name: "Sai Charan Chetpelly",
          picture:
            "https://lh3.googleusercontent.com/a/AAcHTte9StptTJ32XuxH7PCoIyvTsUFX0VdiY9MuyU0254bg=s96-c",
          locale: "en",
          updated_at: "2023-08-06T17:01:47.173Z",
          email: "example@gmail.com",
          email_verified: true,
          sub: "google-oauth2|109240394770328938738",
        },
      }),
    }));
    await waitFor(() => {
      expect(screen.getByTestId("data-table")).toBeInTheDocument();
    });
  });
});