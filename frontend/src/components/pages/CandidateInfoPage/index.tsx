import { useNavigate, useParams } from "react-router";
import {
  CANDITATE_PAGE_INFROMATION,
  CANDITATE_PAGE_REPORT_INFROMATION,
  DEFAULT_EMAIL,
  DEFAULT_USERNAME,
  ENGAGE_BTN_LABEL,
  NAV_LISTS,
  PRE_ADVERSE_ACTION_BUTTON_LABEL,
  SINGLE_USER_DATA,
  formatDateOfBirth,
} from "../../../constants";
import { Navbar } from "../../organisms/Navbar";
import NavbarUserInfoTemplate from "../../templates/NavbarUserInfo";
import { CandidateInformation } from "../CandidateInformation";
import ProfilePicture from "../../../../public/assets/images/Avatar.svg";
import IconPicture from "../../../../public/assets/images/Vector.svg";
import { NavFooterProps } from "../../molecules/NavFooter";
import CandidateInfoHeader from "../../molecules/CandidateInfoHeader";
import backIcon from "../../../../public/assets/images/Back.svg";
import { useState, useEffect } from "react";
import {
  getCandidateById,
  getCandidateCourtSearches,
  getCandidatesReports,
  getCourtSearches,
  updateReport,
} from "../../../utils/API";
import { RowData } from "../../organisms/CourtSearches";

export interface CandidateProps {
  id: number;
  name: string;
  status: string;
  location: string;
  email: string;
  dob: string;
  phoneNo: string;
  zipcode: string;
  socialSecurity: string;
  driverLicense: string;
  adjudication: string;
  adverseActionStatus: string;
  package: string;
}

export const CandidateInfoPage = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const navFooterProps: NavFooterProps = {
    avatarSrc: ProfilePicture,
    avatarAlt: "profile picture",
    avatarSx: {
      width: "36px",
      height: "36px",
    },
    userName: DEFAULT_USERNAME,
    userNameVariant: "body1",
    email: DEFAULT_EMAIL,
    emailVariant: "caption2",
    emailSx: { color: "grey" },
    iconSrc: IconPicture,
    iconAlt: "logout",
    iconStyle: {
      width: "18px",
      height: "18px",
      cursor: "pointer",
    },
  };
  const [courtSearchData, setCourtSearchData] = useState<RowData[]>([]);
  const [candidateData, setCandidateData] = useState<CandidateProps>();

  useEffect(() => {
    const fetchCourtSearchData = async () => {
      try {
        const [candidateData, candidatesCourtSearch, courtSearches] =
          await Promise.all([
            getCandidateById(id),
            getCandidateCourtSearches(),
            getCourtSearches(),
          ]);
        const candidatesCourtSearchData = candidatesCourtSearch.filter(
          (candidate: any) => candidate.candidateId === candidateData.id
        );
        setCourtSearchData(
          candidatesCourtSearchData.map((courtSearch: any) => {
            const courtSearchResult = courtSearches.find(
              (search: any) => courtSearch.courtSearchId === search.id
            );
            return {
              id: courtSearch.id,
              search: courtSearchResult.name?.toString(),
              status: courtSearch.status.toUpperCase(),
              date:courtSearch.updatedAt.toString()
            };
          })
        );
      } catch (error) {
        console.error(error);
      } 
    };
    fetchCourtSearchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candidateData, reportInformation] = await Promise.all([
          getCandidateById(id),
          getCandidatesReports(),
        ]);
        const report = reportInformation.find(
          (report: any) => report.candidateId === candidateData.id
        );
        setCandidateData({
          id: candidateData.id,
          name: candidateData.name,
          location: candidateData.location,
          status: report.reportStatus?.toString(),
          email: candidateData.email,
          dob: formatDateOfBirth(candidateData.dob).toString(),
          phoneNo: candidateData.phoneNo,
          zipcode: candidateData.zipcode,
          socialSecurity: candidateData.socialSecurity.replace(/^(\d{3}-\d{3})/, 'XXX-XXX'),
          driverLicense: candidateData.driverLicense,
          adjudication: report.reportAdjudication,
          adverseActionStatus: report.reportStatus,
          package: report.packageName,
        });
      } catch (error) {
        console.error(error);
      } 
    };

    fetchData();
  }, [id]);
  const getEngage = async () => {
    try {
      const [candidateData, reportInformation] = await Promise.all([
        getCandidateById(id),
        getCandidatesReports(),
      ]);

      const report = reportInformation.find(
        (report: any) => report.candidateId === candidateData.id
      );

      await updateReport(report.id, { ...report, reportAdjudication: "engage" });
    } catch (error) {
    } finally {
      navigate("/candidates");
    }
  };
  return (
      <NavbarUserInfoTemplate
        sidebar={
          <Navbar
            navFooterProps={navFooterProps}
            navLists={NAV_LISTS}
            activeTab="Candidates"
          />
        }
        header={
          <CandidateInfoHeader
            headerLabel={candidateData?.name}
            secondaryButtonLabel={PRE_ADVERSE_ACTION_BUTTON_LABEL}
            secondaryButtonIconAltText="preadverse-action-button"
            primaryButtonLabel={ENGAGE_BTN_LABEL}
            primaryButtonIconAltText="engage-button"
            backButtonIcon={backIcon}
            backButtonIconAltText="back-icon"
            onBackButtonClick={() => navigate("/candidates")}
            handlePreAdverseAcion={() => navigate("/pre-adverse-action",{state:{id:id}})}
            handleEngage={getEngage}
          />
        }
        content={
          <CandidateInformation
            candidateData={candidateData ? candidateData : SINGLE_USER_DATA}
            persontitle={CANDITATE_PAGE_INFROMATION}
            reporttitle={CANDITATE_PAGE_REPORT_INFROMATION}
            courtSearch={courtSearchData}
          />
        }
      />
  );
};
