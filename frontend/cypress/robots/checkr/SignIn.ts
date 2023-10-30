import { RobotEyes, RobotHands } from "./CustomRobots";

export class SignInEyes extends RobotEyes {
  seesForgotPasswordText() {
    this.containsText("Forgot Password");
  }
  seesEmailAddress() {
    this.seesByTestId("email-inputfield");
  }

  seesPassword() {
    this.seesByTestId("password-inputfield");
  }

  isSignInButtonDisabled() {
    this.seesButtonisDisabled("button", "Sign in");
  }

  isSignInButtonEnabled() {
    this.seesButtonisEnabled("button", "Sign in");
  }
}

export class SignInHands extends RobotHands {
  typeEmailAddress() {
    cy.fixture("loginDetails").then((details) => {
      this.typeTextonInputTestId("email-inputfield", details.email);
    });
  }
  typeSigninPassword() {
    cy.fixture("loginDetails").then((details) => {
      this.typeTextonInputTestId("password-inputfield", details.password);
    });
  }
  clickOnSignInButton() {
    this.clickOnButtonWithId("signin-btn");
  }
  clickOnForgotText() {
    this.clickForgotPassword("Forgot Password?");
  }
  clickOnContinueButton() {
    this.clickOnButton("Continue");
  }
}