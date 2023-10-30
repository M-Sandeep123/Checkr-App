import React, { useEffect, useState } from "react";
import NavbarUserInfoTemplate from "../../templates/NavbarUserInfo";
import { Navbar } from "../../organisms/Navbar";
import { NavFooterProps } from "../../molecules/NavFooter";
import PaginatedItems, { TableData } from "../../organisms/TablePagination";
import CandidateInfoHeader from "../../molecules/CandidateInfoHeader";
import { ExportModal } from "../../organisms/ExportModal";
import exportIcon from "../../../../public/assets/images/export.svg";
import addBoxIcon from "../../../../public/assets/images/add_box.svg";
import ProfilePicture from "../../../../public/assets/images/Avatar.svg";
import IconPicture from "../../../../public/assets/images/Vector.svg";
import {
  CANDIDATES_TITLE,
  DEFAULT_EMAIL,
  DEFAULT_USERNAME,
  EXPORT_BUTTON_LABEL,
  GIF_HEADING,
  MANUALORDER,
  NAV_LISTS,
  TOKEN,
  generateToken,
} from "../../../constants";
import {
  getAllCandidates,
  getCandidatesReports,
  getUsers,
  userRegistration,
} from "../../../utils/API";
import CustomChip from "../../atoms/Chip";
import { Navlink } from "../../atoms/Navlink";
import { TableColumn } from "../../organisms/Table";
import SuccessModalBox from "../../molecules/SuccessModalBox";
import Gif from "../../../../public/assets/images/CheckGif.gif";
import { useAuth0 } from "@auth0/auth0-react";
interface ReportsDataProps {
  id: number;
  package: string;
  completed_date: number;
  adjudication: string;
  status: string;
  candidateId: number;
  created_at: number;
  updated_at: number;
}
export const candidates_page_columns: TableColumn[] = [
  {
    id: 1,
    key: "name",
    name: "NAME",
    render: (data: any) => <Navlink children={data} />,
    width: "13.17vw",
  },
  {
    id: 2,
    key: "adjudication",
    name: " ADJUDICATION",
    render: (data: any) =>
      data ? <CustomChip variant="filled" label={data} /> : "-",
    width: "13.17vw",
  },
  {
    id: 3,
    key: "status",
    name: " STATUS",
    render: (data: any) => <CustomChip variant="filled" label={data} />,
    width: "12.44vw",
  },
  {
    id: 4,
    key: "location",
    name: "LOCATION",
    width: "13.17vw",
  },
  {
    id: 5,
    key: "date",
    name: "DATE",
    align: "right",
    width: "13.17vw",
  },
  {
    id: 6,
    key: "",
    name: "",
    width: "12.15vw",
  },
];
export const CandidatesPage = () => {
  const { user } = useAuth0();
  const [dataTableData, setDataTableData] = useState<TableData[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);

  const perfomRegistration = async (email: any, password: string) => {
    try {
      await userRegistration({
        userName: "",
        firstName: "",
        lastName: "",
        dob: "1990-06-20",
        companyName: "Checkr",
        email: email,
        password: password,
      });
      await generateToken(email, password);
    } catch (error) {
      console.log("error in performing user registration", error);
    }
  };
  const handleExport = () => {
    setOpen(!open);
  };
  const handleSuccessModal = () => {
    setOpen(false);
    setOpenSuccessModal(!openSuccessModal);
  };
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
  const fetchData = async () => {
    try {
      const [candidatesData, reportsData] = await Promise.all([
        getAllCandidates(),
        getCandidatesReports(),
      ]);
      setDataTableData(
        candidatesData.map((candidate: any) => {
          const report = reportsData.find(
            (report: any) => report.candidateId === candidate.id
          );
          return {
            id: candidate.id,
            name: candidate.name,
            adjudication: report.reportAdjudication?.toString().toUpperCase(),
            location: candidate.location,
            status: report.reportStatus?.toString().toUpperCase(),
            date: new Date().toLocaleDateString(),
          };
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const userData = await getUsers();
        const data = userData.find(
          (eachuser: any) => eachuser.email == user?.email
        );
        if (data) {
          await generateToken(data.email, data.password);
          await fetchData();
        } else {
          user?.email &&
            (await perfomRegistration(user?.email, "Password@123"));
          if (localStorage.getItem(TOKEN)) {
            await fetchData();
          }
        }
      } catch (error) {
        console.log("error in fetching all user data", error);
      }
    };
    dataFetch();
  }, [user]);
  return (
    <>
      <NavbarUserInfoTemplate
        sidebar={
          <Navbar
            navLists={NAV_LISTS}
            navFooterProps={navFooterProps}
            activeTab={"Candidates"}
          />
        }
        header={
          <CandidateInfoHeader
            headerLabel={CANDIDATES_TITLE}
            secondaryButtonLabel={EXPORT_BUTTON_LABEL}
            secondaryButtonIconAltText="export icon"
            secondaryButtonIconSrc={exportIcon}
            primaryButtonLabel={MANUALORDER}
            primaryButtonIconAltText="manual-order icon"
            primaryButtonIonSrc={addBoxIcon}
            handleExport={handleExport}
          />
        }
        content={
          <PaginatedItems
            tableData={dataTableData}
            columns={candidates_page_columns}
            showCandidatesFilter={true}
          />
        }
      />
      <ExportModal
        open={open}
        onClose={handleExport}
        onSubmit={handleSuccessModal}
      />
      <SuccessModalBox
        heading={GIF_HEADING}
        gifSrc={Gif}
        isOpen={openSuccessModal}
        onCloseHandle={handleSuccessModal}
      />
    </>
  );
};
