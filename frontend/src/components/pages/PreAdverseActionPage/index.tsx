import React, { useEffect, useState } from "react";
import NavbarUserInfoTemplate from "../../templates/NavbarUserInfo";
import { Navbar } from "../../organisms/Navbar";
import ProfilePicture from "../../../../public/assets/images/Avatar.svg";
import IconPicture from "../../../../public/assets/images/Vector.svg";
import { NavFooterProps } from "../../molecules/NavFooter";
import backIcon from "../../../../public/assets/images/Back.svg";
import {
  DEFAULT_EMAIL,
  DEFAULT_USERNAME,
  NAV_LISTS,
} from "../../../constants";
import PreAdverseActionCard from "../../organisms/PreAdverseActionCard";
import IconTypography from "../../molecules/IconTypography";
import { useLocation, useNavigate } from "react-router";
import { getCandidateById} from "../../../utils/API";
export interface CandidateProps {
  id: number;
  name: string;
  location: string;
  email: string;
  dob: string;
  phoneNo: string;
  zipcode: string;
  socialSecurity: string;
  driverLicense: string;
}

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

const PreAdverseActionCardPage = () => {
  const [candidateData, setCandidateData] = useState<CandidateProps>();
  const { state } = useLocation();
  const { id } = state || {};
  const candID=id;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/candidates");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const candidateData = await getCandidateById(candID);
        setCandidateData({
          id: candidateData.id,
          name: candidateData.name,
          location: candidateData.location,
          email: candidateData.email,
          dob: candidateData.dob,
          phoneNo: candidateData.phoneNo,
          zipcode: candidateData.zipcode,
          socialSecurity: candidateData.socialSecurity,
          driverLicense: candidateData.driverLicemse,
        });
      } catch (error) {
        console.error(error);
      } 
    };

    fetchData();
  }, [id]);
  return(
    <>
      <NavbarUserInfoTemplate
        sidebar={
          <Navbar
            navFooterProps={navFooterProps}
            navLists={NAV_LISTS}
            activeTab="Candidates"
          />
        }
        header={
          <IconTypography
            label={"Pre-Adverse Action Notice"}
            src={backIcon}
            alt={"back-icon"}
            variant={"subtitle1"}
            onClick={handleBack}
          />
        }
        content={
          <PreAdverseActionCard
            candidateData={candidateData}
          />
        }
      />
    </>
  );
};

export default PreAdverseActionCardPage;
