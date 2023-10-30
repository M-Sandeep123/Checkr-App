import { Box, IconButton, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import Typography from "../../atoms/TypographyAtom";
import theme from "../../../theme/theme";
import {
  ALREADY_A_MEMBER,
  CONFIRM_PASSWORD,
  EMAIL,
  EMAIL_PLACEHOLDER_TEXT,
  EMAIL_REGEX,
  I_AGREE_TO_THE,
  PASSWORD,
  PASSWORD_PLACEHOLDER,
  PASSWORD_REGEX,
  PRIVACY_POLICY,
  SIGN_IN,
  SIGN_UP,
  SIGN_UP_TEXT,
  VALID_EMAIL,
  VALID_PASSWORD,
} from "../../../constants";
import OpenIcon from "../../../../public/assets/images/unhide.svg";
import CloseIcon from "../../../../public/assets/images/Hide.svg";
import { StyledButton, TextFieldStyled } from "../../molecules/ForgotPassword";
import { MuiCheckbox } from "../../atoms/Checkbox";
import { Navlink } from "../../atoms/Navlink";
import { useNavigate } from "react-router";
import { userRegistration } from "../../../utils/API";
import Icon from "../../atoms/Icon";

const StyledOutline = styled(Stack)({
  width: `${theme.spacing(120)}`,
  height: "672px",
  borderRadius: "6px",
  boxShadow: "0px 4px 28px 0px rgba(45, 45, 47, 0.1)",
  alignItems: "center",
  backgroundColor: `${theme.palette.greyColor.white}`
});
export const StyledTextField = styled(TextFieldStyled)(`
  & .MuiOutlinedInput-root {
    padding:8px 9px 8px 12px;
  }
  & .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input{
    padding:0
  }
  
`);
const StyledInnerStack = styled(Stack)({
  width: "384px",
  marginTop: "54px",
  gap: "24px",
});
const StyledInputStack = styled(Stack)({
  gap: "24px",
});
const StyledStack = styled(Stack)({
  gap: "10px",
});
export const SignUp = () => {
  const navigate = useNavigate();
  const [emailAdrress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleEmailAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value.toLowerCase();
    setEmailAddress(email);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };
  const handleConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const password = event.target.value;
    setConfirmPassword(password);
  };
  const isEmailValid = (email: string): boolean => {
    return EMAIL_REGEX.test(email) && email.indexOf("@@") === -1;
  };
  const isPasswordValid = (password: string): boolean => {
    return PASSWORD_REGEX.test(password);
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };
  const isFormValid = (): boolean => {
    return (
      isEmailValid(emailAdrress) &&
      isPasswordValid(password) &&
      password === confirmPassword
    );
  };
  const handleSignUp = () => {
    if(isFormValid()){
      perfomRegistration(emailAdrress,password);
    }
  }
  const perfomRegistration = async(emailAdrress:string,password:string) => {
    try{
      await userRegistration({
        userName:"",
        firstName:"",
        lastName:"",
        dob:"1990-06-20",
        companyName:"Checkr",
        email: emailAdrress,
        password:password
      });
      navigate("/")
    }
    catch(error){}
  }
  return (
    <StyledOutline data-testid="signup-section">
      <StyledInnerStack>
        <Box>
          <Typography
            variant="heading1"
            color={theme.palette.textColor.highemp}
            marginBottom="8px"
          >
            {SIGN_UP}
          </Typography>
          <Typography variant="body2" color={theme.palette.textColor.medemp}>
            {SIGN_UP_TEXT}
          </Typography>
        </Box>
        <StyledInputStack>
          <StyledStack>
            <Typography
              children={EMAIL}
              variant="caption2"
              color={theme.palette.textColor.medemp}
            />
            <TextFieldStyled
              placeholder={EMAIL_PLACEHOLDER_TEXT}
              variant="outlined"
              value={emailAdrress}
              onChange={handleEmailAddress}
            />
          {!isEmailValid(emailAdrress) && emailAdrress!=="" &&
           <Typography variant="caption2" color={"red"} >{VALID_EMAIL}</Typography>}
          </StyledStack>
          <StyledStack>
            <Typography
              children={PASSWORD}
              variant="caption2"
              color={theme.palette.textColor.medemp}
            />
            <StyledTextField
              type={showPassword ? "text" : "password"}
              placeholder={PASSWORD_PLACEHOLDER}
              variant="outlined"
              value={password}
              onChange={handlePassword}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle-button"
                    onClick={handleTogglePassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <Icon src={OpenIcon} alt="password-eye-on"/>
                    ) : (
                      <Icon src={CloseIcon} alt="password-eye-off" />
                    )}
                  </IconButton>
                ),
              }}
            />
            {!isPasswordValid(password) && password !== "" &&
            <Typography variant="caption2" color={"red"} >{VALID_PASSWORD}</Typography> }
          </StyledStack>
          <StyledStack>
            <Typography
              children={CONFIRM_PASSWORD}
              variant="caption2"
              color={theme.palette.textColor.medemp}
            />
            <StyledTextField
              type={showConfirmPassword ? "text" : "password"}
              placeholder={PASSWORD_PLACEHOLDER}
              variant="outlined"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle-button"
                    onClick={handleToggleConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? (
                      <Icon src={OpenIcon} alt="confirm-password-eye-on"/>
                    ) : (
                      <Icon src={CloseIcon} alt="confirm-password-eye-off"/>
                    )}
                  </IconButton>
                ),
              }}
            />
          </StyledStack>
        </StyledInputStack>
        <Stack direction="row" gap={"11px"} alignItems={"center"}>
          <MuiCheckbox
            defaultChecked={true}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 21,
              },
            }}
          />
          <Stack spacing={1} direction={"row"}>
            <Typography
              variant="body2"
              children={I_AGREE_TO_THE}
              style={{ color: theme.palette.textColor.highemp }}
            />
            <Typography
              variant="body2"
              children={PRIVACY_POLICY}
              color={theme.palette.primaryColor[500]}
            />
          </Stack>
        </Stack>
        <StyledButton
          variant="contained"
          children={SIGN_UP}
          disabled={!isFormValid()}
          onClick={handleSignUp}
        />
        <Stack direction={"row"} spacing={1} justifyContent={"center"}>
          <Typography variant="body1" color={theme.palette.textColor.medemp}>
            {ALREADY_A_MEMBER}
          </Typography>
          <Typography>
            <Navlink
              children={SIGN_IN}
              onClick={() => navigate("/")}
              data-testid="nav-link"
            />
          </Typography>
        </Stack>
      </StyledInnerStack>
    </StyledOutline>
  );
};
