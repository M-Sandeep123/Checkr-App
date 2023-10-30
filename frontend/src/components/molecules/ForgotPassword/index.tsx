import { Button, ButtonProps, Stack, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Typography from "../../atoms/TypographyAtom";
import Icon from "../../atoms/Icon";
import LeftArrowIcon from "../../../../public/assets/images/left-arrow.svg";
import theme from "../../../theme/theme";
import {
  EMAIL,
  EMAIL_PLACEHOLDER,
  EMAIL_REGEX,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_PAGE_GO_BACK_TEXT,
  NO_ISSUES,
  RESET_PASSWORD_TEXT,
} from "../../../constants";
import "./styles.css";
import SuccessModalBox from "../SuccessModalBox";
import gif from "../../../../public/assets/images/CheckGif.gif";
export const TextFieldStyled = styled(TextField)(`
  & .MuiOutlinedInput-root {
    color:${theme.palette.textColor.highemp};
    font-size:${theme.typography.body2.fontSize};
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius:4px;
    padding:8px 0px 8px 12px;
    height:36px;
  }
 
  .MuiInputLabel-root{
    font-size:${theme.typography.body2.fontSize};
    color:${theme.palette.textColor.lowemp};
    margin-top:4px;
    display: flex;
    align-items: center;
    padding-right:20px;
    padding-left:5px;
  }

  & .Mui-focused.MuiInputLabel-root {
    color: ${theme.palette.primaryColor[500]};
  }
  & .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
    padding:0px
  }
`);
export const StyledButton = styled(Button)((props: ButtonProps) => ({
  textTransform: "none",
  height: "44px",
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: theme.palette.primaryColor[500],
    color: "#fff",
  },
  backgroundColor: theme.palette.primaryColor[500],
  color: `${theme.palette.textColor.white}`,
  "&.Mui-disabled": {
    backgroundColor: theme.palette.primaryColor[400],
    color: "#ffffff",
  },
}));

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [emailAdrress, setEmailAddress] = useState("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleEmailAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value.toLowerCase();
    setEmailAddress(email);
  };
  const isEmailValid = (email: string): boolean => {
    return EMAIL_REGEX.test(email);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
    setTimeout(()=>{
      navigate("/OTP-validation")
    },3000)
  };
  return (
    <>
      <Stack
        className="forgotPassword StyledOutline"
        data-testid="forgot-password"
      >
        <Stack className="forgotPassword StyledInnerStack">
          <Stack
            direction={"row"}
            gap={"11px"}
            alignItems={"center"}
            marginBottom={"8px"}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Icon
              style={{
                width: "13.33px",
                height: "13.33px",
              }}
              src={LeftArrowIcon}
              alt="left-arrrow-icon"
              data-testid="back-icon"
              onclick={() => navigate(-1)}
            />
            <Typography
              variant="caption2"
              color={theme.palette.primaryColor[500]}
            >
              {FORGOT_PASSWORD_PAGE_GO_BACK_TEXT}
            </Typography>
          </Stack>
          <Stack gap={"8px"} marginBottom={"24px"}>
            <Typography
              variant="heading1"
              color={theme.palette.textColor.highemp}
            >
              {FORGOT_PASSWORD}
            </Typography>
            <Typography variant="body2" color={theme.palette.textColor.medemp}>
              {NO_ISSUES}
            </Typography>
          </Stack>
          <Stack marginBottom="24px" gap="11px">
            <Typography
              children={EMAIL}
              variant="caption2"
              color={theme.palette.textColor.medemp}
            />
            <TextFieldStyled
              data-testid="inputfield"
              placeholder={EMAIL_PLACEHOLDER}
              variant="outlined"
              value={emailAdrress}
              onChange={handleEmailAddress}
            />
          </Stack>
          <StyledButton
            variant="contained"
            children={RESET_PASSWORD_TEXT}
            disabled={!isEmailValid(emailAdrress)}
            onClick={handleModal}
          />
        </Stack>
      </Stack>
      <SuccessModalBox
        heading="OTP has been sent to your email!"
        gifSrc={gif}
        isOpen={openModal}
        onCloseHandle={handleModal}
      />
    </>
  );
};
