import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
  visitCheckrLogin() {
    this.accessUrl('http://localhost:3000/');
    return this;
  }
  visitOTP(otp: string) {
    this.accessUrl(`http://localhost:3000/${otp}`);
    return this;
  }
}

export class RobotEyes extends BaseEyes {
  doesNotContainText(text: string) {
    cy.contains(text).should("not.exist");
    return this;
  }
  seesByRole(role: string) {
    cy.get(`[role=${role}]`);
    return this;
  }
  seesByTestId(testId: string) {
    cy.get(`[data-testid=${testId}]`);
    return this;
  }
  seesByButtonText(text: string) {
    cy.contains("button", text);
    return this;
  }
  containsText(text: string) {
    cy.contains(text);
    return this;
  }
  seesInputFieldPlaceHolder(placeholder: string) {
    return cy.get("input").should("have.attr", "placeholder", placeholder);
  }

  seesButtonisDisabled(dom: string, text: string) {
    cy.contains(text) && cy.get(dom).should("be.disabled");
    return this;
  }

  seesButtonisEnabled(dom: string, text: string) {
    cy.contains(text) && cy.get(dom).should("not.be.disabled");
    return this;
  }
}

export class RobotHands extends BaseHands {
  clickOnButton(text: string) {
    cy.contains(text).click({ force: true });
    return this;
  }
  typeName(text: string) {
    cy.get('input[type="text"]').type(text);

    return this;
  }
  clickOnButtonWithId(testId: string) {
    cy.get(`[data-testid="${testId}"]`).click();
    return this;
  }
  clickAdverseActions(text: string) {
    cy.contains(text).dblclick();
  }
  clickForgotPassword(text: string) {
    cy.contains(text).click();
  }
  clickLogOutIcon(text:string){
    cy.get('[alt="Logout-Icon"]').click()
  }
  typeTextonInputTestId(testId: string, text: string) {
    cy.get(`[data-testid="${testId}"] input`).type(text, { force: true });
    return this;
  }
  typeTextonInputPlaceholder(placeholder: string, text: string) {
    cy.get(`[placeholder="${placeholder}"]`).should(
      "have.attr",
      "placeholder",
      text
    );
    return this;
  }
  typeTextOnInputId(id: string, text: string) {
    cy.get(`input#${id}`).type(text, { force: true });
    return this;
  }

}
