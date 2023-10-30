import React from "react";
import { Box, Divider, Modal, Stack, styled } from "@mui/material";
import Typography from "../../atoms/TypographyAtom";
import Icon from "../../atoms/Icon";
import CrossIcon from "../../../../public/assets/images/cross-icon.svg";
import theme from "../../../theme/theme";
import "./styles.css";
import ButtonAtom from "../../atoms/ButtonAtom";
import {
  ACTION_CONTENT,
  ATTACHMENTS,
  CHECKR_BPO,
  FROM,
  MAILNOTE_DATA,
  MAIL_ATTACHMENTS_DATA,
  MAIL_BODY_FINAL_TEXT,
  MAIL_BODY_TEXT,
  MAIL_SALUATION,
  PRE_ADVERSE_ACTION_NOTICE,
  PRE_ADVERSE_ACTION_NOTICE_MAIL_SUBJECT,
  SENDER_EMAIL,
  SINCERELY,
  SUBJECT,
  SUBMIT_NOTICE_BUTTON_TEXT,
  TO,
} from "../../../constants";

type UserProps = {
  email?: string;
  name?: string;
};
interface ModalProps {
  open: boolean;
  onClose: () => void;
  chargesSelected: string[];
  userData: UserProps;
  onSubmit: () => void;
}
export const CenteredModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const ModalHeader = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "16px 21px 16px 20px",
  alignItems: "center",
});
const ModalBody = styled(Stack)({
  padding: "16px 13px 11px 20px",
});
const MailHeader = styled(Stack)({
  marginBottom: "24px",
});
const MailBody = styled(Stack)({
  gap: "12px",
  marginBottom: "24px",
});
const MailAttachment = styled(Stack)({
  gap: "8px",
  marginBottom: "13px",
});
const StyledAttachmentBox = styled(Stack)({
  alignItems: "center",
  flexDirection: "row",
  gap: "7px",
});
const MailNote = styled(Stack)({
  width: "532px",
  borderRadius: "4px",
  padding: "10px 52px 7px 10px",
  backgroundColor: `${theme.palette.accentColor.lightRed}`,
});
const ModalOutline = styled(Box)({
  maxWidth: "696px",
  borderRadius: "6px",
  backgroundColor: `${theme.palette.textColor.white}`,
});
const ActionInfo = styled("li")({
  color: theme.palette.textColor.medemp,
  paddingLeft: "10px",
  
})
export const PreAdviceActionModal = ({
  open,
  chargesSelected,
  userData,
  onClose,
  onSubmit,
}: ModalProps) => {
  const renderChargesSelected = (chargesSelected: string[]) => {
    return (
      <ul>
        {chargesSelected.map((charge) => (
          <li key={charge}>
            <Typography variant="caption2" className="greyText">
              {charge}
            </Typography>
          </li>
        ))}
      </ul>
    );
  };
  const renderMailNotes = (mailNoteData: string[]) => {
    return (
      <ul>
        {mailNoteData.map((note) => (
          <li key={note}>
            <Typography
              variant="caption2"
              color={theme.palette.accentColor.red}
            >
              {note}
            </Typography>
          </li>
        ))}
      </ul>
    );
  };

  const { email, name } = userData;
  return (
    <>
      <CenteredModal open={open} data-testid="preadvice-action-tracking-modal">
        <ModalOutline>
          <ModalHeader>
            <Typography
              variant="subtitle1"
              color={theme.palette.textColor.highemp}
            >
              {PRE_ADVERSE_ACTION_NOTICE}
            </Typography>
            <Icon
              src={CrossIcon}
              alt="close"
              onclick={onClose}
              style={{
                width: "14px",
                height: "14px",
                cursor: "pointer",
              }}
            />
          </ModalHeader>
          <Divider />
          <ModalBody>
            <MailHeader>
              <Typography
                variant="caption2"
                className="greyText"
                marginBottom={"12px"}
              >
                <span className="darkText">{FROM}:</span> {SENDER_EMAIL}
              </Typography>
              <Typography
                variant="caption2"
                className="greyText"
                marginBottom={"16px"}
              >
                <span className="darkText">{TO}:</span> {email}
              </Typography>
              <Typography
                variant="caption2"
                className="greyText"
                marginBottom={"12px"}
              >
                <span className="darkText">{SUBJECT}:</span>{" "}
                {PRE_ADVERSE_ACTION_NOTICE_MAIL_SUBJECT}
              </Typography>
              <MailNote>{renderMailNotes(MAILNOTE_DATA)}</MailNote>
            </MailHeader>
            <MailBody>
              <Typography variant="caption2" className="greyText">
                {MAIL_SALUATION} {name},
              </Typography>
              <Typography variant="caption2" className="greyText">
                {MAIL_BODY_TEXT}
              </Typography>
              {renderChargesSelected(chargesSelected)}
              <ActionInfo><Typography variant="caption2" sx={{margin: "-5px"}}>{ACTION_CONTENT}</Typography></ActionInfo>
              <Typography variant="caption2" className="greyText">
                {MAIL_BODY_FINAL_TEXT}
              </Typography>
              <Stack>
                <Typography variant="caption2" className="greyText">
                  {SINCERELY},
                </Typography>
                <Typography variant="caption2" className="greyText">
                  {CHECKR_BPO}
                </Typography>
              </Stack>
            </MailBody>
            <MailAttachment>
              <Typography
                variant="caption2"
                color={theme.palette.textColor.highemp}
              >
                {ATTACHMENTS}
              </Typography>
              {MAIL_ATTACHMENTS_DATA.map((data) => (
                <StyledAttachmentBox key={data.id}>
                  <Icon
                    src={data.src}
                    style={{
                      width: "18px",
                      height: "8px",
                    }}
                  />
                  <Typography variant="caption2" className="greyText">
                    {data.attachmentLabel}
                  </Typography>
                </StyledAttachmentBox>
              ))}
            </MailAttachment>
          </ModalBody>
          <Divider />
          <ButtonAtom
            buttonVariant="contained"
            buttonText={SUBMIT_NOTICE_BUTTON_TEXT}
            buttonColor={theme.palette.textColor.white}
            buttonWidth={127}
            buttonHeight={36}
            backgroundColor={theme.palette.primaryColor[500]}
            bordeRadius={6}
            sx={{
              m: "12px 16px 12px 0px",
              float: "right",
            }}
            onClick={onSubmit}
          />
        </ModalOutline>
      </CenteredModal>
    </>
  );
};
