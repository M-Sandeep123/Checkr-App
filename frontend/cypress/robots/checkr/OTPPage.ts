import { RobotEyes, RobotHands } from "./CustomRobots";

export class OTPEyes extends RobotEyes {
  seesGoBack() {
    this.seesByButtonText("Go Back");
  }
  seesTitle() {
    this.containsText("Please enter OTP");
  }
  seesSubText() {
    this.containsText("OTP has been sent to your email");
  }
  isContinueButtonDisabled() {
    this.seesButtonisDisabled("button", "Continue");
  }

  isContinueButtonEnabled() {
    this.seesButtonisEnabled("button", "Continue");
  }
  seesResendOTP() {
    this.containsText("Resend OTP");
  }
}

export class OTPHands extends RobotHands {
  clickOnContinueButton() {
    this.clickOnButton("Continue");
  }
}