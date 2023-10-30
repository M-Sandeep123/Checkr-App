import { Box, Stack, styled } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "../../atoms/TypographyAtom";
import ButtonAtom from "../../atoms/ButtonAtom";
import theme from "../../../theme/theme";
import { LOGOUT_HEADING, LOGOUT_SUBHEADING } from "../../../constants";

export interface LogoutModalBoxProps {
  Cancelbuttonlabel: string;
  Logoutbuttonlabel: string;
  isOpen: boolean;
  onCloseHandle?: () => void;
  onClickHandle?: () => void;
  handleChange?: (e: any) => void;
}

const StyledStack = styled(Stack)({
  backgroundColor: `${theme.palette.greyColor.white}`,
  width: "450px",
  height: "152px",
  borderRadius: "8px",
  padding: "20px",
  border: "1px solid #ffffff",
});

const StyledBox = styled(Box)({
  justifyContent: "space-between",
});

const StyledTypographyAtom1 = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: "Medium",
  fontSize: "20px",
  lineHeight: "30px",
});

const StyledTypographyAtom2 = styled(Typography)({
  color: `${theme.palette.textColor.medemp}`,
  paddingTop: "10px",
});

const LogoutModalBox = ({
  Cancelbuttonlabel,
  Logoutbuttonlabel,
  isOpen,
  onCloseHandle,
  onClickHandle,
  handleChange,
}: LogoutModalBoxProps) => {
  return (
    <>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={onCloseHandle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledStack justifyContent="space-between">
            <StyledBox>
              <StyledTypographyAtom1
                variant="heading1"
                color={theme.palette.textColor.highemp}
              >
                {LOGOUT_HEADING}
              </StyledTypographyAtom1>
              <StyledTypographyAtom2
                variant="body2"
                color={theme.palette.textColor.medemp}
              >
                {LOGOUT_SUBHEADING}
              </StyledTypographyAtom2>
            </StyledBox>
            <Stack flexDirection="row" justifyContent="flex-end" gap="10px">
              <ButtonAtom
                buttonText={Cancelbuttonlabel}
                buttonBorder="2px solid #E5E7ED"
                buttonColor={theme.palette.textColor.medemp}
                backgroundColor={theme.palette.structural.white}
                buttonWidth={79}
                buttonHeight={36}
                bordeRadius={6}
                onClick={onCloseHandle}
                sx={{ variant: theme.typography.body1 }}
              ></ButtonAtom>
              <ButtonAtom
                buttonVariant="contained"
                buttonText={Logoutbuttonlabel}
                buttonColor={theme.palette.textColor.white}
                backgroundColor={theme.palette.primaryColor[500]}
                buttonWidth={79}
                buttonHeight={36}
                bordeRadius={6}
                onClick={onClickHandle}
                sx={{ variant: theme.typography.body1}}
              ></ButtonAtom>
            </Stack>
          </StyledStack>
        </Modal>
      )}
    </>
  );
};

export default LogoutModalBox;
