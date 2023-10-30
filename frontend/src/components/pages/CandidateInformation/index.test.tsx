import { screen, render } from "@testing-library/react";
import { CandidateInformation } from ".";
import {
  CANDITATE_PAGE_INFROMATION,
  CANDITATE_PAGE_REPORT_INFROMATION,
  SINGLE_USER_DATA,
} from "../../../constants";

describe("CandidateInformation test cases", () => {
  const mockCandidateData = SINGLE_USER_DATA;
  const persontitle = CANDITATE_PAGE_INFROMATION;
  const reporttitle = CANDITATE_PAGE_REPORT_INFROMATION;
  it("renders component correctly", () => {
    render(
      <CandidateInformation
        persontitle={persontitle}
        reporttitle={reporttitle}
        candidateData={mockCandidateData} 
        courtSearch={[]}      />
    );
    const element = screen.getByTestId("individual-candidate-information");
    expect(element).toBeInTheDocument();
  });
  it("Accordians work as expected", () => {
    render(
      <CandidateInformation
        persontitle={persontitle}
        reporttitle={reporttitle}
        candidateData={mockCandidateData} 
        courtSearch={[]}      />
    );
    const firstAccordianElement = screen.getByText(persontitle);
    expect(firstAccordianElement).toBeInTheDocument();
    const secondAccordianElement = screen.getByText(reporttitle);
    expect(secondAccordianElement).toBeInTheDocument();
  });
});
