import { Box, Divider, Grid, IconButton, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme/theme";
import Typography from "../../atoms/TypographyAtom";
import {
  DONT_HAVE_AN_ACCOUNT,
  EMAIL,
  EMAIL_PLACEHOLDER_TEXT,
  EMAIL_REGEX,
  FORGOT_PASSWORD,
  OR,
  PASSWORD,
  PASSWORD_PLACEHOLDER,
  PASSWORD_REGEX,
  REMEMBER_ME,
  SIGN_IN,
  SIGN_IN_TEXT,
  SIGN_IN_TEXT_CONTENT,
  SIGN_IN_WITH_GITHUB,
  SIGN_IN_WITH_GOOGLE,
  SIGN_UP,
  VALID_EMAIL,
  VALID_PASSWORD,
  generateToken,
} from "../../../constants";
import { StyledButton, TextFieldStyled } from "../../molecules/ForgotPassword";
import { MuiCheckbox } from "../../atoms/Checkbox";
import { Navlink } from "../../atoms/Navlink";
import GoogleIcon from "../../../../public/assets/images/google-logo.svg";
import OpenIcon from "../../../../public/assets/images/unhide.svg";
import CloseIcon from "../../../../public/assets/images/Hide.svg";
import GithubIcon from "../../../../public/assets/images/github-icon.svg";
import Icon from "../../atoms/Icon";
import { StyledTextField } from "../SignUp";
import "./styles.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import { getUsers } from "../../../utils/API";

const StyledSocialLogin = styled(Stack)({
  borderRadius: "4px",
  height: "46px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${theme.palette.structural.stroke}`,
  "&:hover": {
    cursor: "pointer",
  },
});
export const Signin = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const [emailAdrress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleEmailAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const email = event.target.value.toLowerCase();
    setEmailAddress(email);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };
  const handleTogglePasswordVisibilty = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const isEmailValid = (email: string): boolean => {
    return EMAIL_REGEX.test(email) && email.indexOf("@@") === -1;
  };
  const isPasswordValid = (password: string): boolean => {
    return PASSWORD_REGEX.test(password);
  };
  const isFormValid = () => {
    return isEmailValid(emailAdrress) && isPasswordValid(password);
  };

  const userDataFetch = async () => {
    try {
      const userData = await getUsers();
      const user = userData.find((user: any) => user.email === emailAdrress);
      const isValid: boolean = user.password == password;
      if (isValid) {
        setMessage("");
        await generateToken(emailAdrress,password);
        navigate("/candidates");
      } else {
        setMessage("user does not exist");
      }
    } catch (error) {}
  };
  const handleSignin = () => {
    if (isFormValid()) {
      userDataFetch();
    }
  };
  const onClickSignUp = () => {
    navigate("/signup");
  };

  const onClickForward = () => {
    navigate("/forgot-password");
  };
  return (
    <Stack className="StyledOutline" data-testid="signin-section">
      <Stack className="StyledInnerStack ">
        <Box>
          <Typography
            variant="heading1"
            color={theme.palette.textColor.highemp}
          >
            {SIGN_IN}
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.textColor.medemp}
            marginTop="8px"
          >
            {SIGN_IN_TEXT_CONTENT}
          </Typography>
        </Box>
        <Stack className="StyledInputStack">
          <Stack className="StyledStack">
            <Typography
              children={EMAIL}
              variant="caption2"
              color={theme.palette.textColor.medemp}
            />
            <TextFieldStyled
              data-testid="email-inputfield"
              placeholder={EMAIL_PLACEHOLDER_TEXT}
              variant="outlined"
              value={emailAdrress}
              onChange={handleEmailAddressChange}
            />
            {!isEmailValid(emailAdrress) && emailAdrress !== "" && (
              <Typography variant="caption2" color={"red"}>
                {VALID_EMAIL}
              </Typography>
            )}
          </Stack>
          <Stack className="StyledStack">
            <Typography
              children={PASSWORD}
              variant="caption2"
              color={theme.palette.textColor.medemp}
            />
            <StyledTextField
              data-testid="password-inputfield"
              type={showPassword ? "text" : "password"}
              placeholder={PASSWORD_PLACEHOLDER}
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle-button"
                    onClick={handleTogglePasswordVisibilty}
                    edge="end"
                  >
                    {showPassword ? (
                      <Icon src={OpenIcon} alt="open-icon" data-testid ="password-eye-icon-on"/>
                    ) : (
                      <Icon src={CloseIcon} alt="close-icon" data-testid ="password-eye-icon-off"/>
                    )}
                  </IconButton>
                ),
              }}
            />
            {!isPasswordValid(password) && password !== "" && (
              <Typography variant="caption2" color={"red"}>
                {VALID_PASSWORD}
              </Typography>
            )}
          </Stack>
        </Stack>
        <Grid className="StyledRowStack">
          <Grid className="StyledRow">
            <MuiCheckbox
              defaultChecked={true}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 21,
                },
              }}
            />
            <Typography
              variant="body2"
              children={REMEMBER_ME}
              style={{ color: theme.palette.textColor.medemp }}
            />
          </Grid>
          <Typography>
            <Navlink children={FORGOT_PASSWORD} onClick={onClickForward} />
          </Typography>
        </Grid>
        {message && <p className="StyledStackBottom">{message}</p>}
        <StyledButton
          variant="contained"
          children={SIGN_IN_TEXT}
          disabled={!isFormValid()}
          data-testid="signin-btn"
          onClick={handleSignin}
        />
        <Stack>
          <Divider variant="fullWidth" textAlign="center">
            <Typography variant="body2" color={theme.palette.textColor.medemp}>
              {OR}
            </Typography>
          </Divider>
        </Stack>
        <Stack gap={"16px"}>
          <StyledSocialLogin>
            <Box
              className="StyledSocialStack"
              data-testid="with-google"
              onClick={() => {
                loginWithRedirect();
              }}
            >
              <Icon
                src={GoogleIcon}
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
              <Typography
                variant="body2"
                color={theme.palette.textColor.highemp}
              >
                {SIGN_IN_WITH_GOOGLE}
              </Typography>
            </Box>
          </StyledSocialLogin>
          <StyledSocialLogin>
            <Box
              className="StyledSocialStack"
              data-testid="with-github"
              onClick={() => {
                loginWithRedirect();
              }}
            >
              <Icon
                src={GithubIcon}
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
              <Typography
                variant="body2"
                color={theme.palette.textColor.highemp}
              >
                {SIGN_IN_WITH_GITHUB}
              </Typography>
            </Box>
          </StyledSocialLogin>
        </Stack>
        <Stack direction={"row"} spacing={1} justifyContent={"center"}>
          <Typography variant="body1" color={theme.palette.textColor.medemp}>
            {DONT_HAVE_AN_ACCOUNT}
          </Typography>
          <Typography>
            <Navlink children={SIGN_UP} onClick={onClickSignUp} />
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
