import React, { useEffect, useState } from "react";
import NavbarUserInfoTemplate from "../../templates/NavbarUserInfo";
import { Navbar } from "../../organisms/Navbar";
import { NavFooterProps } from "../../molecules/NavFooter";
import ProfilePicture from "../../../../public/assets/images/Avatar.svg";
import IconPicture from "../../../../public/assets/images/Vector.svg";
import PaginatedItems, { TableData } from "../../organisms/TablePagination";
import Typography from "../../atoms/TypographyAtom";
import theme from "../../../theme/theme"; 
import {
  ADVERSE_ACTIONS_TITLE,
  DEFAULT_EMAIL,
  DEFAULT_USERNAME,
  NAV_LISTS,
  dateDisplay,
} from "../../../constants";
import { TableColumn } from "../../organisms/Table";
import { Navlink } from "../../atoms/Navlink";
import CustomChip from "../../atoms/Chip";
import { getAllAdverseActions, getAllCandidates } from "../../../utils/API";
const adverse_actions_columns: TableColumn[] = [
  {
    id: 1,
    key: "name",
    name: "NAME",
    width: "15.66vw",
    render: (data: any) => <Navlink children={data} />,
  },
  {
    id: 2,
    key: "status",
    name: " STATUS",
    render: (data: any) => <CustomChip variant="filled" label={data} />,
    width: "12.44vw",
  },
  {
    id: 3,
    key: "pre_notice_date",
    name: "PRE NOTICE DATE",
    width: "15.66vw",
    align: "right",
  },
  {
    id: 4,
    key: "post_notice_date",
    name: "POST NOTICE DATE",
    width: "15.66vw",
    align: "right",
  },
  {
    id: 5,
    key: "",
    name: "",
    width: "17.86vw",
  },
];
export interface CandidateDataProps {
  id: number;
  name: string;
  location: string;
  email: string;
  dob: number;
  phoneNo: string;
  zipcode: 94158;
  socialSecurity: string;
  driverLicemse: string;
  created_at: number;
  updated_at: number;
}
export interface AdverseActionProps {
  id: number;
  candidateId: number;
  "pre_notice-date": number;
  post_notice_date: number;
  actionStatus: string;
  action_update_time: number;
  created_at: number;
  updated_at: number;
}
export const AdverseActionPage = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
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
    iconAlt: "Logout-Icon",
    iconStyle: {
      width: "18px",
      height: "18px",
      cursor: "pointer",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candidatesData, actionsData] = await Promise.all([
          getAllCandidates(),
          getAllAdverseActions(),
        ]);
        setTableData(
          candidatesData.map((candidate: any) => {
            const adverseAction = actionsData.find(
              (action: any) =>
                action.candidateId === candidate.id
            );
            return {
              id: candidate.id,
              name: candidate.name,
              status:adverseAction.actionStatus?.toString().toUpperCase(),
              pre_notice_date:dateDisplay(adverseAction.preNoticeDate.toString()),
              post_notice_date:dateDisplay(adverseAction.postNoticeDate.toString())
            };
          })
        );
      } catch (error) {
        console.error(error);
      } 
    };

    fetchData();
  }, []);
  return (
    <>
      <NavbarUserInfoTemplate
        sidebar={
          <Navbar
            navLists={NAV_LISTS}
            navFooterProps={navFooterProps}
            activeTab={"Adverse Actions"}
          />
        }
        header={
          <Typography
            variant="heading1"
            color={theme.palette.textColor.highemp}
          >
            {ADVERSE_ACTIONS_TITLE}
          </Typography>
        }
        content={
          <PaginatedItems
            tableData={tableData}
            columns={adverse_actions_columns}
            showCandidatesFilter={false}
          />
        }
      />
    </>
  );
};
