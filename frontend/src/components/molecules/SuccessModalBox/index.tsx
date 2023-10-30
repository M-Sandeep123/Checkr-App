import { Stack, styled } from "@mui/material";
import Modal from "@mui/material/Modal";
import GifTypography from "../GifTypography";
import theme from "../../../theme/theme";

export interface SuccessModalProps {
  heading: string;
  gifSrc: string;
  isOpen: boolean;
  onCloseHandle?: () => void;
  handleChange?: (e: any) => void;
}

const StyledStack = styled(Stack)({
  backgroundColor: `${theme.palette.greyColor.white}`,
  width: "696px",
  height: "424px",
  borderRadius: "8px",
  paddingX: "20px",
  paddingY: "20px",
});

const StyledModal = styled(Modal)({
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  "&:focus": {
    outline: "none",
  },
});

const SuccessModalBox = ({
  heading,
  gifSrc,
  isOpen,
  onCloseHandle,
  handleChange,
}: SuccessModalProps) => {
  return (
    <>
      {isOpen && (
        <StyledModal
          data-testid="successmodal"
          open={isOpen}
          onClose={onCloseHandle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledStack justifyContent="space-between">
            <GifTypography gifTypographyLabel={heading} gifSrc={gifSrc} />
          </StyledStack>
        </StyledModal>
      )}
    </>
  );
};

export default SuccessModalBox;
