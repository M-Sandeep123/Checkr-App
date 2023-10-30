import { RobotEyes, RobotHands } from "./CustomRobots";

export class ForgotPasswordEyes extends RobotEyes {
  seesGoBack() {
    this.containsText("Go Back");
  }
  seesTitle() {
    this.containsText("Forgot Password?");
  }
  seesSubText() {
    this.containsText("No worries, we’ll send you reset instructions");
  }
  seesEmail() {
    this.seesInputFieldPlaceHolder("Example@gmail.com");
  }
  isResetPasswordButtonDisabled() {
    this.seesButtonisDisabled("button", "Reset Password");
  }

  isResetPasswordButtonEnabled() {
    this.seesButtonisEnabled("button", "Reset Password");
  }

  seesOTPInputField() {
    this.containsText("OTP has been sent to your email");
  }
}

export class ForgotPasswordHands extends RobotHands {
  typeEmailAddress() {
    cy.fixture("loginDetails").then((details) => {
      this.typeTextonInputTestId("inputfield", details.email);
    });
  }

  clickOnResetPasswordButton() {
    this.clickOnButton("Reset Password");
  }
}
