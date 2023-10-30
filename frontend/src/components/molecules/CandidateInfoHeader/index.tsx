import Box from "@mui/material/Box";
import theme from "../../../theme/theme";
import Typography from "../../atoms/TypographyAtom";
import ButtonAtom from "../../atoms/ButtonAtom";
import Icon from "../../atoms/Icon";
import "./styles.css";

export interface PropsType {
  handlePreAdverseAcion?: () => void;
  handleExport?: () => void;
  handleEngage?: () => void;
  headerLabel?: string;
  secondaryButtonLabel?: string;
  primaryButtonLabel?: string;
  secondaryButtonIconSrc?: string;
  primaryButtonIonSrc?: string;
  secondaryButtonIconAltText?: string;
  primaryButtonIconAltText?: string;
  backButtonIcon?: string;
  backButtonIconAltText?: string;
  onBackButtonClick?: () => void;
}

const CandidateInfoHeader = ({
  handlePreAdverseAcion,
  handleExport,
  handleEngage,
  onBackButtonClick,
  headerLabel,
  secondaryButtonLabel,
  secondaryButtonIconAltText,
  secondaryButtonIconSrc,
  primaryButtonIconAltText,
  primaryButtonIonSrc,
  primaryButtonLabel,
  backButtonIcon,
  backButtonIconAltText,
}: PropsType) => {
  const HeaderStyle = {
    display: "flex",
    width: "100%",
    justifyContent:"space-between",
    height: theme.spacing(9),
  };

  const ButtonStyle = {
    display: "flex",
    gap: theme.spacing(4),
  };

  const IconTypographyStyle = {
    display: "flex",
    flexGrow: 1,
    gap: theme.spacing(3),
    alignItems: "center",
  };
  let secondaryButtonClickHandler: () => void;
  if (handlePreAdverseAcion) {
    secondaryButtonClickHandler = handlePreAdverseAcion;
  } else if (handleExport) {
    secondaryButtonClickHandler = handleExport;
  } else {
    secondaryButtonClickHandler = () => {};
  }
  return (
    <Box style={HeaderStyle} className="header-outline">
      <Box style={IconTypographyStyle}>
        {backButtonIcon && (
          <Icon
            src={`${backButtonIcon}`}
            alt={`${backButtonIconAltText}`}
            style={{
              width: `${theme.spacing(5)}`,
              height: `${theme.spacing(5)}`,
              color: `${theme.palette.textColor.medemp} `,
              cursor: "pointer",
            }}
            onclick={onBackButtonClick}
          />
        )}
        <Typography variant="heading1" className="header">
          {headerLabel}
        </Typography>
      </Box>
      <Box style={ButtonStyle}>
        <ButtonAtom
          buttonText={secondaryButtonLabel}
          buttonVariant="contained"
          buttonColor={`${theme.palette.textColor.medemp}`}
          buttonHeight={36}
          backgroundColor={theme.palette.textColor.white}
          buttonIcon={
            secondaryButtonIconSrc !== undefined ? (
              <Icon
                src={`${secondaryButtonIconSrc}`}
                alt={`${secondaryButtonIconAltText}`}
                style={{
                  width: `${theme.spacing(5)}`,
                  height: `${theme.spacing(5)}`,
                  color: `${theme.palette.textColor.medemp} `,
                }}
              />
            ) : null
          }
          buttonBorder={`1px solid ${theme.palette.structural.stroke}`}
          bordeRadius={6}
          onClick={secondaryButtonClickHandler}
          data-testid="secondary-btn"
        />
        <ButtonAtom
          buttonText={primaryButtonLabel}
          buttonVariant="contained"
          buttonColor={`${theme.palette.textColor.white}`}
          buttonHeight={36}
          backgroundColor={theme.palette.primaryColor[500]}
          buttonIcon={
            primaryButtonIonSrc !== undefined ? (
              <Icon
                src={`${primaryButtonIonSrc}`}
                alt={`${primaryButtonIconAltText}`}
                style={{
                  width: `${theme.spacing(5)}`,
                  height: `${theme.spacing(5)}`,
                }}
              />
            ) : null
          }
          buttonBorder="none"
          bordeRadius={6}
          onClick={handleEngage}
        />
      </Box>
    </Box>
  );
};

export default CandidateInfoHeader;
