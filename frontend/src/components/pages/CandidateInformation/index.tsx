import React from "react";
import { Box } from "@mui/material";
import InfoLog from "../../organisms/InfoLog";
import {
  convertToCandidateData,
  convertToReportInformation,
} from "../../../constants";
import CourtSearches, { RowData } from "../../organisms/CourtSearches";
import "./styles.css";
export interface CandidateProps {
  id: number;
  name: string;
  status: string;
  location: string;
  email: string;
  dob: string;
  phoneNo: string;
  zipcode: string;
  socialSecurity: string;
  driverLicense: string;
  adjudication: string;
  adverseActionStatus: string;
  package: string;
}
interface Iprops {
  persontitle: string;
  reporttitle: string;
  candidateData: CandidateProps;
  courtSearch: RowData[]
}

export const CandidateInformation = ({
  persontitle,
  reporttitle,
  candidateData,
  courtSearch,
}: Iprops) => {
 

  return (
    <Box data-testid="individual-candidate-information" className="content">
      <InfoLog
        data={convertToCandidateData(candidateData)}
        headerName={persontitle}
      />
      <InfoLog
        data={convertToReportInformation(candidateData)}
        headerName={reporttitle}
      />
      <CourtSearches rowsData={courtSearch} />
    </Box>
  );
};
