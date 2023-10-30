import React from "react";
import { Box, Card, styled } from "@mui/material";
import theme from "../../../theme/theme";
import backIcon from "../../../../public/assets/images/coloredBack.svg";
import Icon from "../../atoms/Icon";
import ButtonAtom from "../../atoms/ButtonAtom";
import Typography from "../../atoms/TypographyAtom";
import { Navlink } from "../../atoms/Navlink";
import OtpInput from "react-otp-input";
import { OTP_SECTION } from "../../../constants";
import { useNavigate } from "react-router";
import "./styles.css";

const LayOutBox = styled(Card)(({ theme }) => ({
  maxWidth: theme.spacing(120),
  height: theme.spacing(168),
    padding: `${theme.spacing(6.75)} ${theme.spacing(12)} ${theme.spacing(0)} ${theme.spacing(12)}`,
    borderRadius: theme.spacing(1.5),
    backgroundColor: theme.palette.structural.white,
    boxShadow: "0px 4px 28px 0px rgba(45, 45, 47, 0.1)",
}));

const BackButton = styled(ButtonAtom)(({ theme }) => ({
  width: theme.spacing(3.3325),
  height: theme.spacing(3.3325),
  color: theme.palette.primaryColor[500],
}));

const HeadContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2.25),
  display: "flex",
  flexFlow: "column",
  gap: theme.spacing(6),
}));

const MainContainer = styled(Box)(() => ({
  display: "flex",
  flexFlow: "column",
  alignItems: "start",
}));

const HeadLabelContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexFlow: "column",
  gap: theme.spacing(2),
}));

const NavLinkContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(6),
  gap: theme.spacing(1.25),
  alignSelf: "center"
}));

const OTPInputSection = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState("");

  return (
    <LayOutBox className="LayOutBox" data-testid="otp-input-section">
      <MainContainer >
        <BackButton
          buttonText={OTP_SECTION.backButton}
          buttonVariant="text"
          buttonColor={theme.palette.primaryColor[500]}
          buttonHeight={36}
          backgroundColor={theme.palette.textColor.white}
          buttonIcon={
          <Icon src={backIcon} alt="back-nav-link" />
        }
          buttonBorder="none"
          bordeRadius={6}
        />
        <HeadContainer className="HeadContainer">
          <HeadLabelContainer>
            <Typography
              variant="heading1"
              style={{ color: theme.palette.textColor.highemp }}
            >
              {OTP_SECTION.mainLabel}
            </Typography>
            <Typography
              variant="body2"
              style={{ color: theme.palette.textColor.medemp }}
            >
              {OTP_SECTION.subHeading}
            </Typography>
          </HeadLabelContainer>
          <Box >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => <input {...props}/>}
              inputType="tel"
              inputStyle={{
                width:"83.75px",
                height:"36px",
                padding:"0px",
                borderRadius:"4px",
                border:`1px solid ${theme.palette.structural.stroke}`,
              }}
              containerStyle={{
                gap:"16px"
              }}
            />
          </Box>
          <ButtonAtom
            buttonText={OTP_SECTION.continueButton}
            buttonVariant="contained"
            buttonColor={theme.palette.textColor.white}
            buttonHeight={44}
            backgroundColor={theme.palette.primaryColor[500]}
            buttonBorder="none"
            bordeRadius={6}
            sx={{
              height: theme.spacing(11),
            }}
            disabled={otp.length!== 4}
            onClick={()=>navigate("/candidates")}
          />
        </HeadContainer>
        <NavLinkContainer className="NavLinkContainer">
          <Typography
            variant="body2"
            style={{ color: theme.palette.textColor.medemp }}
          >
            {OTP_SECTION.resendMsg}
          </Typography>
          <Navlink 
               children={OTP_SECTION.navLink}
             />
        </NavLinkContainer>
      </MainContainer>
    </LayOutBox>
  );
};

export default OTPInputSection;
