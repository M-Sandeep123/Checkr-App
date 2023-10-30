import HomeIcon from "../../public/assets/images/home.svg";
import candidatesIcon from "../../public/assets/images/candidates.svg";
import adverseactionIcon from "../../public/assets/images/adverse_action.svg";
import logsIcon from "../../public/assets/images/logs.svg";
import analyticsIcon from "../../public/assets/images/analytics.svg";
import accountIcon from "../../public/assets/images/account.svg";
import screeningsIcon from "../../public/assets/images/screening.svg";
import attachmentIcon from "../../public/assets/images/attachment-icon.svg";
import { CandidateProps } from "../components/pages/CandidateInformation";
import { getToken } from "../utils/API";
export const IMAGE_NOT_FOUND = "Icon not found";
export const SIGN_IN_TEXT = "Sign in";
export const NAME_PLACEHOLDER = "Name";
export const USER_NAME = "John Smith";
export const DEFAULT_PLACEHOLDER = "Please enter the mail";
export const DEFAULT_LABEL = "Home";
export const DEFAULT_SRC = "static/media/public/assets/images/home.svg";
export const ADVERSE_ACTION_FILTER_LABEL_DATA = [
  {
    label: "Pending",
  },
  {
    label: "Scheduled",
  },
  {
    label: "Dispute",
  },
  {
    label: "Canceled",
  },
  {
    label: "Undeliverable",
  },
];
export const CANDIDATES_FILTER_LABEL_DATA = {
  title: "Filters",
  firstSubTitle: {
    title: "Status",
    labelOptions: {
      values: ["all", "clear", "consider"],
      label: ["All Status", "Clear", "Consider"],
    },
  },
  secondSubTitle: {
    title: "Adjudication",
    labelOptions: {
      values: ["all", "engage", "adverse action"],
      label: ["All", "Engaged", "Pre adverse action"],
    },
  },
};
export const ADVERSE_ACTION_FILTER_DATA = {
  title: "Filters",
  subTitle: "Status",
  defaultCheckboxLabel: "All Status",
};

export const OTP_SUCCESS_MSG = "OTP has been sent to your email!";
export const EMAIL_PLACEHOLDER = "Example@gmail.com";
export const RESET_PASSWORD_TEXT = "Reset Password";
export const EMAIL = "Email";
export const NO_ISSUES = "No worries, we’ll send you reset instructions";
export const FORGOT_PASSWORD = "Forgot Password?";
export const FORGOT_PASSWORD_PAGE_GO_BACK_TEXT = "Go Back";
export interface NavListProps {
  id: number;
  alt: string;
  title: string;
  src: string;
}
export const NAV_LISTS: NavListProps[] = [
  { id: 1, title: "Home", src: HomeIcon, alt: "Home icon not found" },
  {
    id: 2,
    title: "Candidates",
    src: candidatesIcon,
    alt: "candidates icon not found",
  },
  {
    id: 3,
    title: "Adverse Actions",
    src: adverseactionIcon,
    alt: "Home icon not found",
  },
  { id: 4, title: "Logs", src: logsIcon, alt: "logs icon not found" },
  {
    id: 5,
    title: "Analytics",
    src: analyticsIcon,
    alt: "analytics icon not found",
  },
  { id: 6, title: "Account", src: accountIcon, alt: "account icon not found" },
  {
    id: 7,
    title: "Screening",
    src: screeningsIcon,
    alt: "screenings icon not found",
  },
];
export const DEFAULT_USERNAME = "James Rodriguez";
export const DEFAULT_EMAIL = "James.co";
export const DOWNLOAD_EXPORT_MSG =
  "Download link was sucessfully sent to your email";
export const OTP_SECTION = {
  mainLabel: " Please enter OTP",
  subHeading: "OTP has been sent to your email",
  buttonLabel: "Continue",
  resendMsg: "Didn’t receive the OTP? ",
  navLink: "Resend OTP",
  backButton: "Go Back",
  continueButton: "Continue",
};
export const PRE_ADVERSE_ACTION_NOTICE = "Pre-Adverse Action Notice";
export const SENDER_EMAIL = "kyle@checkr.com";
export const FROM = "From";
export const TO = "To";
export const SUBJECT = "Subject";
export const PRE_ADVERSE_ACTION_NOTICE_MAIL_SUBJECT =
  "Pre-adverse action notice - checkr-bpo";
export const MAIL_SALUATION = "Dear";
export const SUBMIT_NOTICE_BUTTON_TEXT = "Submit Notice";
export const ATTACHMENTS = "Attachments";
export const CHECKR_BPO = "Checkr-bpo";
export const SINCERELY = "Sincerely";
export const MAIL_BODY_FINAL_TEXT =
  "If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly.";
export const MAIL_BODY_TEXT =
  "You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Chckr, Inc.";
export const MAILNOTE_DATA = [
  "Please carefully review the list of charges (in bold) and your contact information.",
  "Please note that we will send the corresponding post adverse action email automatically after 7 days.",
];
export const ACTION_CONTENT = "Assault Domestic Violence"; 
export interface AttachmentProps {
  id: number;
  src: string;
  attachmentLabel: string;
}
export const COURT_SECTION = {
  tableHeader: "Court Searches",
  isDate: "DATE",
  columnsData: [
    { id: 1, name: "SEARCH" },
    { id: 2, name: "STATUS" },
    { id: 3, name: "DATE" },
    {},
  ],
};
export const MAIL_ATTACHMENTS_DATA: AttachmentProps[] = [
  {
    id: 1,
    src: attachmentIcon,
    attachmentLabel: "Summary of right under the FCRA",
  },
  {
    id: 2,
    src: attachmentIcon,
    attachmentLabel: "Copy of background report",
  },
];
interface UserProps {
  email: string;
  name: string;
}
export const DEFAULT_USER_DATA: UserProps = {
  email: "John.smith@checkr.com",
  name: "John Smith",
};
export const CHARGES_SELECTED = ["Assault Domestic Violence"];
export const DATE_PICKER = {
  fromLabel: "Reports From",
  toLabel: "Reports To",
  dateFormate: "DD/MM/YYYY",
};
export const ALREADY_A_MEMBER = "Already a member?";
export const SIGN_IN = "Sign in";
export const SIGN_UP = "Sign up";
export const I_AGREE_TO_THE = "I agree to the";
export const PRIVACY_POLICY = "Privacy Policy";
export const EMAIL_PLACEHOLDER_TEXT = "abc@gmail.com";
export const PASSWORD = "Password";
export const PASSWORD_PLACEHOLDER = "********";
export const CONFIRM_PASSWORD = "Confirm Password";
export const SIGN_UP_TEXT = "Please sign up to start exploring the platform";
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[a-z]{2,}(?:\.[a-z]{2})?$/;
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
export const SIGN_IN_TEXT_CONTENT = "Please enter your login credentials";
export const REMEMBER_ME = "Remember me";
export const DONT_HAVE_AN_ACCOUNT = "Don’t have an account?";
export const SIGN_IN_WITH_GITHUB = "Sign in with GitHub";
export const SIGN_IN_WITH_GOOGLE = "Sign in with Google";
export const OR = "or";

export type MapData = {
  id: number;
  title: string;
  content: string;
  imgType: string;
};

export const data: MapData[] = [
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
  {
    id: 3,
    title: "DOB",
    content: "1990-09-10 (26)",
    imgType: "dob",
  },
  {
    id: 4,
    title: "Phone",
    content: "(555) 555-5555",
    imgType: "phone",
  },
  {
    id: 5,
    title: "Zipcode",
    content: "94158",
    imgType: "location",
  },
  {
    id: 6,
    title: "Social Security",
    content: "XXX-XX-6789",
    imgType: "socialSecurity",
  },
  {
    id: 7,
    title: "Drivers License",
    content: "FTEST1111",
    imgType: "dob",
  },
  {
    id: 8,
    title: "Created at",
    content: "Nov 29, 2016 11:05:57 AM",
    imgType: "calender",
  },
];

export const EXPORT_MODAL = {
  modalHeader: "Export Candidate Reports CSV",
  exportButton: "Export Report",
  iconMsg: "Close-icon",
};
export const DATA_TABLE = {
  tableHeader: "Candidate Information",
  isDate: "DATE",
  searchPlaceholder: "Search any candidate",
  columnsData: [
    { id: 1, name: "NAME" },
    { id: 2, name: "ADJUDICATION" },
    { id: 3, name: "STATUS" },
    { id: 4, name: "LOCATION" },
    { id: 5, name: "DATE" },
    {},
  ],
  filter: "Filter",
  altFilterIconText: "filter-icon",
  altMockIconText: "dot-icon",
};
export const TABLE_DATA = [
  {
    id: 1,
    name: "John Smith",
    adjudication: "-",
    status: "CLEAR",
    location: "Barrouallie",
    date: "2/22/2022",
  },
  {
    id: 2,
    name: "Soerene",
    adjudication: "-",
    status: "CLEAR",
    location: "Vänersborg",
    date: "3/13/2022",
  },
  {
    id: 3,
    name: "Woalsh",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sukamanah",
    date: "7/2/2022",
  },
  {
    id: 4,
    name: "Maurizoia",
    adjudication: "-",
    status: "CLEAR",
    location: "Sukamanah",
    date: "2/20/2022",
  },
  {
    id: 5,
    name: "Koendre",
    adjudication: "-",
    status: "CONSIDER",
    location: "Beutong Ateuh",
    date: "5/19/2022",
  },
  {
    id: 6,
    name: "Eroastus",
    adjudication: "-",
    status: "CLEAR",
    location: "Höviyn Am",
    date: "12/1/2021",
  },
  {
    id: 7,
    name: "Jeroeme",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sharïngol",
    date: "7/26/2022",
  },
  {
    id: 8,
    name: "John Smith",
    adjudication: "-",
    status: "CONSIDER",
    location: "Lianyun",
    date: "5/28/2022",
  },
  {
    id: 9,
    name: "Caroi",
    adjudication: "-",
    status: "CLEAR",
    location: "Taboão da Serra",
    date: "5/23/2022",
  },
  {
    id: 10,
    name: "Kimbole",
    adjudication: "-",
    status: "CLEAR",
    location: "Veselí nad Moravou",
    date: "8/24/2022",
  },
];
export const PAGINATION = {
  perPageItems: [
    { id: 1, page: "5 per page", value: 5 },
    { id: 2, page: "10 per page", value: 10 },
    { id: 3, page: "20 per page", value: 20 },
    { id: 4, page: "30 per page", value: 30 },
  ],
  pageBreakingLable: "...",
  pagesOutOf: "out of",
  result: "results",
  iconMsg: "Close-icon",
  arrowLeftAltText: "left-arrow",
  arrowRightAltText: "right-arrow",
  numberOfResults: "results found"
};
export const NAV_BAR_TEXT = "navigationbar";
export const HEADER_TEXT = "Header";
export const MAIN_CONTENT_TEXT = "MainContent";

export const GIF_HEADING = "OTP has been sent to your email!!";
export const SIGNIN = "Sign In";
export const MANUALORDER = "Manual Order";

export const LOGOUT_HEADING = "Confirm Logout";
export const LOGOUT_SUBHEADING = "Are you sure you want to logout?";
export const CANCEL_BUTTON = "Cancel";
export const LOGOUT_BUTTON = "Logout";
export const COURT_SEARCH_DATA = [
  {
    id: 1,
    search: "SSN Verification",
    status: "CLEAR",
    date: "06/07/2023",
  },
  {
    id: 2,
    search: "Sex Offender",
    status: "CONSIDER",
    date: "06/07/2023",
  },
  {
    id: 3,
    search: "Federal Criminal",
    status: "ENGAGE",
    date: "06/07/2023",
  },
  {
    id: 4,
    search: "County Criminal",
    status: "SCHEDULE",
    date: "06/07/2023",
  },
  {
    id: 5,
    search: "County Criminal",
    status: "SCHEDULE",
    date: "06/07/2023",
  },
];
export const CANDITATE_PAGE_INFROMATION = "Candidate Information";
export const CANDITATE_PAGE_REPORT_INFROMATION = "Report Information";
export const SINGLE_USER_DATA = {
  id: 1,
  name: "John Smith",
  status: "clear",
  location: "Barrouallie",
  email: "john.smith@checkr.com",
  dob: "1990-09-10",
  phoneNo: "(555) 555-5555",
  zipcode: "94158",
  driverLicense: "FTEST1111 (CA)",
  socialSecurity: "XXX-XX-6789",
  adverseActionStatus: "Clear",
  package: "Employee pro",
  adjudication: "-",
};
export const PRE_ADVERSE_ACTION_BUTTON_LABEL = "Pre-Adverse Action";
export const ENGAGE_BTN_LABEL = "Engage";
export const formatDate = () => {
  const currentDate = new Date();
  const pastDate = new Date(
    currentDate.getTime() - (1 * 24 + 14) * 60 * 60 * 1000
  );

  const formattedCurrentDate = currentDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const formattedPastDate = pastDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return {
    current: formattedCurrentDate.toString(),
    past: formattedPastDate.toString(),
  };
};
export const convertToCandidateData = (userData: CandidateProps) => {
  const data = [
    {
      id: 1,
      title: "Name",
      content: userData.name,
      imgType: "name",
    },
    {
      id: 2,
      title: "Email",
      content: userData.email,
      imgType: "email",
    },
    {
      id: 3,
      title: "DOB",
      content: userData.dob,
      imgType: "dob",
    },
    {
      id: 4,
      title: "Phone",
      content: userData.phoneNo,
      imgType: "phone",
    },
    {
      id: 5,
      title: "Zipcode",
      content: userData.zipcode,
      imgType: "location",
    },
    {
      id: 6,
      title: "Social Security",
      content: userData.socialSecurity,
      imgType: "socialSecurity",
    },
    {
      id: 7,
      title: "Drivers License",
      content: userData.driverLicense,
      imgType: "dob",
    },
    {
      id: 8,
      title: "Created at",
      content: "Nov 29,2016 11:05:57 AM",
      imgType: "calender",
    },
  ];

  return data;
};
export const convertToReportInformation = (userData: CandidateProps) => {
  const { current, past } = formatDate();

  const data = [
    {
      id: 1,
      title: "Status",
      content: userData.adverseActionStatus,
      imgType: "adverseStatus",
    },
    {
      id: 2,
      title: "Adjudication",
      content: userData.adjudication ? userData.adjudication : "-",
      imgType: "adjudication",
    },
    {
      id: 3,
      title: "Package",
      content: userData.package,
      imgType: "package",
    },
    {
      id: 4,
      title: "Created At",
      content: past,
      imgType: "calender1",
    },
    {
      id: 5,
      title: "Completed Date",
      content: current,
      imgType: "calender2",
    },
    {
      id: 6,
      title: "Turn Around Time ",
      content: "1 Day , 14 hours",
      imgType: "clock",
    },
  ];

  return data;
};
export const ACCORDION_IMAGE_TYPE_DATA: string[] = [
  "name",
  "email",
  "dob",
  "phone",
  "location",
  "socialSecurity",
  "calender",
  "adverseStatus",
  "adjudication",
  "package",
  "calender1",
  "calender2",
  "clock",
];
export const CANDIDATES_TITLE = "Candidates";
export const EXPORT_BUTTON_LABEL = "Export";


export const PRE_ADVERSE_NAME = "John Smith"
export const PRE_ADVERSE_EMAIL_ADDRESS_FROM = ` kyle@checkr.com`;
export const PRE_ADVERSE_EMAIL_ADDRESS_TO = " john.smith@checkr.com";
export const PRE_ADVERSE_SUBJECT = " Pre-adverse action notice - checkr-bpo";
export const PRE_ADVERSE_BODY = `You recently authorized checkr-bpo ("the company)" to obtain consumer reports and/or investigate consumer reports about you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.`;
export const PRE_ADVERSE_CHECKBOX_TITLE =
  "Select the charges for the pre adverse action";
export const PRE_ADVERSE_CHECKBOX_1 = "Driving while license suspended";
export const PRE_ADVERSE_CHECKBOX_2 = "Assault Domestic Violence";
export const PRE_ADVERSE_CHECKBOX_3 =
  "Unable to verify employment history at Dunder Mifflin";
export const PRE_ADVERSE_BODY_TEXT =
  "If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the information contained in the report), you should contact the agency identifield above directly.";
export const PRE_ADVERSE_FROM = "From";
export const PRE_ADVERSE_TO = "To";
export const PRE_ADVERSE_ACTION_SUBJECT = "Subject";
export const PRE_ADVERSE_ACTION_NOTICE_MAIL_SUB =
  "Pre-adverse action notice - checkr-bpo";
export const PRE_ADVERSE_MAIL_SALUATION = "Dear";
export const PRE_ADVERSE_CHECKR_BPO = "Checkr-bpo";
export const PRE_ADVERSE_SINCERELY = "Sincerely";
export const PRE_ADVERSE_FOOTER_BODY = "Auto send post adverse action ";

export const convertEpochToDate = (epochNumber: number) => {
  const date = new Date(epochNumber * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};
export const ADVERSE_ACTIONS_TITLE = "Adverse Actions";
export const LOADING = "Loading...";
export const ERROR = "Error fetching data...";
export const API_BASE_URL = "https://ms-bc-95.bootcamp64.tk";
export const VALID_EMAIL = "please enter a valid email";
export const VALID_PASSWORD= " password length should 8 character and contains(A,_,1)";
export const VALIDATE_MSG = "The email or password is incorrect";
export const CONSIDER = 'CONSIDER';
export const ADVERSE_ACTION = "ADVERSE ACTION";
export const CLEAR = 'CLEAR';
export const ENGAGE="ENGAGE";
export const formatDateOfBirth=(dateStr:string)=> {
  const givenDate = new Date(dateStr);
  const year = givenDate.getUTCFullYear();
  const month = givenDate.getUTCMonth() + 1; // Months are 0-indexed
  const day = givenDate.getUTCDate();
  const age = new Date().getFullYear() - year;
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const formattedDateWithAge = `${formattedDate} (${age})`;
  return formattedDateWithAge;
}
export const dateDisplay=(dateStr:string) =>{
  const givenDate = new Date(dateStr);
  const year = givenDate.getUTCFullYear();
  const month = givenDate.getUTCMonth() + 1;
  const day = givenDate.getUTCDate();
  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
}
export const TOKEN = "authToken";
export const UNABLE_TO_GENERTE_TOKEN = 'unable to generate token';
export const generateToken = async (emailAdrress:string,password:string) => {
  try {
    const response = await getToken({
      email: emailAdrress,
      password: password,
    });

    if (response.ok) {
      const data = await response.text();
      if (data !== UNABLE_TO_GENERTE_TOKEN) {
        localStorage.setItem(TOKEN, data);
      }
    } else {
      console.log("Request failed:", response.status, response.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};