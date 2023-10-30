import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "../../molecules/Card";
import Typography from "../../atoms/TypographyAtom";
import { ACCORDION_IMAGE_TYPE_DATA, MapData } from "../../../constants";
import useName from "../../../../public/assets/images/user_info_image.svg";
import Email from "../../../../public/assets/images/Email.svg";
import DoB from "../../../../public/assets/images/Dob.svg";
import Phone from "../../../../public/assets/images/Phone.svg";
import ZipCode from "../../../../public/assets/images/location.svg";
import socialSecurity from "../../../../public/assets/images/socialSecurity.svg";
import CreatedAt from "../../../../public/assets/images/calender.svg";
import AdverseActionStatusIcon from "../../../../public/assets/images/adverseActionStatusIcon.svg";
import AdjudictionIcon from "../../../../public/assets/images/Adjucation.svg";
import PackageIcon from "../../../../public/assets/images/package.svg";
import CreatedAtCalender from "../../../../public/assets/images/Calender1.svg";
import CompletedCalender from "../../../../public/assets/images/CompletedAtIcon.svg";
import ClockIcon from "../../../../public/assets/images/ClockIcon.svg";
import theme from "../../../theme/theme";
import "./styles.css";
import { StyledEngineProvider } from "@mui/material/styles";
export interface InfoLogProps {
  data: MapData[];
  headerName: string;
}
const InfoLog = ({ data, headerName }: InfoLogProps) => {
  const imagePaths = {
    [ACCORDION_IMAGE_TYPE_DATA[0]]: useName,
    [ACCORDION_IMAGE_TYPE_DATA[1]]: Email,
    [ACCORDION_IMAGE_TYPE_DATA[2]]: DoB,
    [ACCORDION_IMAGE_TYPE_DATA[3]]: Phone,
    [ACCORDION_IMAGE_TYPE_DATA[4]]: ZipCode,
    [ACCORDION_IMAGE_TYPE_DATA[5]]: socialSecurity,
    [ACCORDION_IMAGE_TYPE_DATA[6]]: CreatedAt,
    [ACCORDION_IMAGE_TYPE_DATA[7]]: AdverseActionStatusIcon,
    [ACCORDION_IMAGE_TYPE_DATA[8]]: AdjudictionIcon,
    [ACCORDION_IMAGE_TYPE_DATA[9]]: PackageIcon,
    [ACCORDION_IMAGE_TYPE_DATA[10]]: CreatedAtCalender,
    [ACCORDION_IMAGE_TYPE_DATA[11]]: CompletedCalender,
    [ACCORDION_IMAGE_TYPE_DATA[12]]: ClockIcon,
  };
  const getImgPath = (pathName: string): string => {
    return imagePaths[pathName] || "";
  };
  return (
    <StyledEngineProvider injectFirst>
      <Box className="infolog-box">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography
              variant="subtitle1"
              color={theme.palette.textColor.highemp}
              className="header"
            >
              {headerName}
            </Typography>
          </AccordionSummary>
          <Divider />
          <AccordionDetails className="accordion-details">
            <Grid container spacing={4}>
              {data.map((item) => (
                <Grid item md={4} xs={12} sm={6} key={item.title}>
                  <Card
                    title={item.title}
                    content={item.content}
                    imageUrl={getImgPath(item.imgType)}
                  />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </StyledEngineProvider>
  );
};

export default InfoLog;
