import { RobotEyes, RobotHands } from "./CustomRobots";

export class CandidateView extends RobotEyes {
  viewCandidateText() {
    this.containsText("Candidates");
  }
  viewCandidateHeader() {
    this.containsText("Candidate Information");
  }
  viewSearchBar() {
    this.seesInputFieldPlaceHolder("Search any candidate");
  }
  filter() {
    this.containsText("Filter");
  }
  candidateName() {
    this.containsText("John Smith");
  }

  preadverseAction() {
    this.containsText("Pre-Adverse Action Notice");
  }
  engageButton() {
    this.seesByButtonText("Engage");
  }
  viewHeaderDetails() {
    this.containsText("Candidate Information");
    this.containsText("Report Information");
  }
  viewPreAdverseButton() {
    cy.contains("Pre-Adverse Action");
    return this;
  }

  viewPreviewNotice() {
    this.containsText("Preview Notice");
  }

  viewOptions() {
    this.containsText("Clear");
  }
  viewExportButton() {
    this.containsText("Export");
  }
  viewCalendar() {
    cy.contains("Reports From");
    cy.contains("Reports To");
    return this;
  }

  viewExportReportButton() {
    cy.contains("Export Report");
    return this;
  }
}
export class CandidateHands extends RobotHands {
  clickPreviewSubmit() {
    cy.contains("Preview Notice").click();
    cy.contains("Submit Notice").click();
    return this;
  }
  clickExportButton() {
    this.clickOnButton("Export");
  }
  clickPreAdverse() {
    this.clickOnButton("Pre-Adverse Action");
  }
  clickEngage() {
    this.clickOnButton("Engage");
  }
  clickExportReportButton() {
    this.clickOnButton("Export Report");
  }
  clickFilter() {
    this.clickOnButton("Filter");
  }
  selectOptions() {
    this.clickOnButton("Clear");
  }
  clickPreAdverseActions() {
    cy.get('[data-testid="checkbox Assault Domestic Violence"]').click();
    return this;
  }
  typeSearch() {
    cy.fixture("loginDetails").then((details) => {
      this.typeName(details.search);
    });
  }
  clickCandidateName() {
    this.clickOnButton("John Smith");
  }
  clickDetails() {
    cy.contains("Candidate Information").click();
    cy.contains("Report Information").click();
    return this;
  }
}