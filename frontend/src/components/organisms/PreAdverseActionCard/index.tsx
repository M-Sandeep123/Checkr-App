import theme from "../../../theme/theme";
import ButtonAtom from "../../atoms/ButtonAtom";
import {
  PRE_ADVERSE_CHECKR_BPO,
  PRE_ADVERSE_FOOTER_BODY,
  PRE_ADVERSE_BODY_TEXT,
  PRE_ADVERSE_MAIL_SALUATION,
  PRE_ADVERSE_SINCERELY,
  PRE_ADVERSE_BODY,
  PRE_ADVERSE_CHECKBOX_1,
  PRE_ADVERSE_CHECKBOX_2,
  PRE_ADVERSE_CHECKBOX_3,
  PRE_ADVERSE_CHECKBOX_TITLE,
  FROM,
  TO,
  SUBJECT,
} from "../../../constants/index";
import gif from "../../../../public/assets/images/CheckGif.gif";
import { Box, Paper, Stack, Divider } from "@mui/material";
import Typography from "../../atoms/TypographyAtom";
import { useState } from "react";
import "./styles.css";
import CheckBoxTypography from "../../molecules/CheckBoxTypography";
import { PreAdviceActionModal } from "../PreAdviceActionModal";
import SuccessModalBox from "../../molecules/SuccessModalBox";
import { CandidateProps } from "../../pages/PreAdverseActionPage";
import {
  getCandidateById,
  getCandidatesReports,
  updateReport,
} from "../../../utils/API";
import { useNavigate } from "react-router";

export interface PreAdverseActionCardProp {
  candidateData?: CandidateProps;
}
const PreAdverseActionCard = ({ candidateData }: PreAdverseActionCardProp) => {
  const navigate = useNavigate();
  const [isCheckedSecondBox, setIsCheckedSecondBox] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSecondBoxChange = (event: any) => {
    setIsCheckedSecondBox(event.target.checked);
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  const handleSuccessModal = () => {
    updateAction();
    setModal(false);
    setIsSuccessModalOpen(!isSuccessModalOpen);
    setTimeout(() => {
      navigate("/candidates");
    }, 3000);
  };
  const buttonColor = !isCheckedSecondBox
    ? theme.palette.primaryColor[400]
    : theme.palette.primaryColor[500];

  const updateAction = async () => {
    try {
      const [candData, reportInformation] = await Promise.all([
        getCandidateById(candidateData?.id),
        getCandidatesReports(),
      ]);

      const report = reportInformation.find(
        (report: any) => report.candidateId === candData.id
      );

      await updateReport(report.id, {
        ...report,
        reportAdjudication: "adverseaction",
      });
    } catch (error) {}
  };
  return (
    <Box className="preAdvActionCard styleBox" data-testid="preadverse-card">
      <Paper className={"preAdvActionCard stylePaper"}>
        <Stack className={"preAdvActionCard detailsStack"}>
          <Stack className={"preAdvActionCard styleStack"}>
            <div className={"preAdvActionCard textStyle"}>
              <Typography
                children={FROM}
                variant={"caption2"}
                sx={{
                  color: theme.palette.textColor.highemp,
                  marginBottom: "5px",
                }}
              />
              <Typography
                children={"Kyle@Checkr.Com"}
                variant={"caption2"}
                sx={{
                  color: theme.palette.textColor.medemp,
                  marginLeft: theme.spacing(0.75),
                  marginBottom: "5px",
                }}
              />
            </div>
          </Stack>

          <Divider />

          <hr className="line" />
          <Stack className="preAdvActionCard styleStack">
            <div className="preAdvActionCard textStyle">
              <Typography
                children={TO}
                variant={"caption2"}
                sx={{
                  color: theme.palette.textColor.highemp,
                  marginBottom: "5px",
                }}
              />
              <Typography
                children={candidateData?.email}
                variant={"caption2"}
                sx={{
                  color: theme.palette.textColor.medemp,
                  marginLeft: theme.spacing(0.75),
                  marginBottom: "5px",
                }}
              />
            </div>
          </Stack>
          <Divider />

          <hr className={"preAdvActionCard line"} />
          <Stack className={"preAdvActionCard styleStack"}>
            <div className={"preAdvActionCard textStyle"}>
              <Typography
                children={SUBJECT}
                variant={"caption2"}
                sx={{
                  color: theme.palette.textColor.highemp,
                  marginBottom: "5px",
                }}
              />
              <Typography
                children={"Pre-Adverse Action Notice - Checkr-Bpo"}
                variant={"caption2"}
                sx={{
                  color: theme.palette.textColor.medemp,
                  marginLeft: theme.spacing(0.75),
                }}
              />
            </div>
          </Stack>
          <Divider />
          <hr className={"preAdvActionCard line"} />
        </Stack>
        <Stack className={"preAdvActionCard styleStackBody"}>
          <span
            className={"preAdvActionCard styleContBody"}
            children={`${PRE_ADVERSE_MAIL_SALUATION} ${candidateData?.name},`}
          />
          <br />
          <span
            className={"preAdvActionCard styleContBody"}
            children={PRE_ADVERSE_BODY}
          />
          <br />
          <Stack
            direction="column"
            justifyContent="space-around"
            sx={{ height: "126px" }}
          >
            <Typography
              children={PRE_ADVERSE_CHECKBOX_TITLE}
              variant="caption2"
              color={theme.palette.textColor.highemp}
            />
            <CheckBoxTypography
              label={PRE_ADVERSE_CHECKBOX_1}
              labelColor={theme.palette.textColor.medemp}
            />
            <CheckBoxTypography
              label={PRE_ADVERSE_CHECKBOX_2}
              onChange={(e) => handleSecondBoxChange(e)}
              data-testid="checkbox2"
              labelColor={theme.palette.textColor.medemp}
            />
            <CheckBoxTypography
              label={PRE_ADVERSE_CHECKBOX_3}
              labelColor={theme.palette.textColor.medemp}
            />
          </Stack>
          <br />
          <span
            className={"preAdvActionCard styleContBody"}
            children={PRE_ADVERSE_BODY_TEXT}
          />
          <br />
          <span
            className={"preAdvActionCard styleContBody"}
            children={PRE_ADVERSE_SINCERELY}
          />

          <span
            className={"preAdvActionCard styleContBody"}
            children={PRE_ADVERSE_CHECKR_BPO}
          />
          <br />
        </Stack>
        <Divider />
        <hr className="preAdvActionCard line" />
        <Stack className="preAdvActionCard styleStackFooter">
          <Stack className="preAdvActionCard stackFooterContainer">
            <span
              className={"preAdvActionCard styleContBody"}
              children={PRE_ADVERSE_FOOTER_BODY}
            />
            <ButtonAtom
              buttonText="7"
              buttonVariant="outlined"
              buttonBorder={`1px solid ${theme.palette.greyColor.stroke}`}
              buttonColor={theme.palette.textColor.highemp}
              sx={{
                marginLeft: theme.spacing(3),
                marginRight: theme.spacing(3),
              }}
            />
            <span
              className={"preAdvActionCard styleContBody"}
              children="Days "
            />
          </Stack>
          <Stack>
            <ButtonAtom
              buttonText="Preview Notice"
              buttonVariant="contained"
              buttonBorder="6px"
              backgroundColor={buttonColor}
              disabled={!isCheckedSecondBox}
              buttonColor={theme.palette.greyColor.white}
              sx={{ marginRight: theme.spacing(3) }}
              onClick={toggleModal}
            />
          </Stack>
        </Stack>
      </Paper>
      {modal && (
        <Stack>
          <PreAdviceActionModal
            open={modal}
            onClose={toggleModal}
            chargesSelected={[]}
            userData={{
              email: candidateData?.email,
              name: candidateData?.name,
            }}
            onSubmit={handleSuccessModal}
          />
        </Stack>
      )}
      <SuccessModalBox
        heading="Pre-Advance Action notice successfully sent"
        gifSrc={gif}
        isOpen={isSuccessModalOpen}
        onCloseHandle={handleSuccessModal}
      />
    </Box>
  );
};
export default PreAdverseActionCard;
