import Box from "@mui/material/Box";
import CustomImage from "../../atoms/Image";
import Typography from "../../atoms/TypographyAtom";
import theme from "../../../theme/theme";

export interface PropsType {
  gifTypographyLabel?: string;
  gifSrc?: string;
}

const GifTypography = ({ gifTypographyLabel, gifSrc }: PropsType) => {
  const StyledContainer = {
    display: "flex",
    flexFlow: "column",
    gap: theme.spacing(8.5),
    alignItems: "center",
    width: theme.spacing(50),
    height: theme.spacing(50),
    margin: `${theme.spacing(20.25)} ${theme.spacing(62)} ${theme.spacing(
      35.75
    )}`,
  };

  return (
    <Box style={StyledContainer}>
      <CustomImage
        src={gifSrc}
        alt="test-image"
        width={theme.spacing(50)}
        height={theme.spacing(50)}
      />
      <Typography
        variant="heading2"
        sx={{
          width: theme.spacing(104),
          height: theme.spacing(7),
          textAlign: "center",
        }}
      >
        {gifTypographyLabel}
      </Typography>
    </Box>
  );
};

export default GifTypography;
