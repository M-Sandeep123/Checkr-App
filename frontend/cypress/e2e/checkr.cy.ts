import {
  AdverseActionView,
  AdverseActionHands,
} from "../robots/checkr/AdverseActionPage";
import { CandidateView, CandidateHands } from "../robots/checkr/CandidatePage";
import { Dependencies } from "../robots/checkr/CustomRobots";
import {
  ForgotPasswordEyes,
  ForgotPasswordHands,
} from "../robots/checkr/ForgotPassword";
import { OTPEyes } from "../robots/checkr/OTPPage";
import { SignInEyes, SignInHands } from "../robots/checkr/SignIn";

context("Checkr cypress tests", () => {
  const dependencies = new Dependencies();
  const signInEyes = new SignInEyes();
  const signInHands = new SignInHands();
  const forgotPasswordEyes = new ForgotPasswordEyes();
  const forgotPasswordHands = new ForgotPasswordHands();
  const otpEyes = new OTPEyes();
  const candidateEyes = new CandidateView();
  const candidateHands = new CandidateHands();
  const adverActionsEyes = new AdverseActionView();
  const adverActionsHands = new AdverseActionHands();

  beforeEach(() => {
    dependencies.visitCheckrLogin();
    cy.viewport(1440, 768)
  });

  describe("Login Test Suit", () => {
    describe("SignIn test cases", () => {
      it("checks components in sign in page", () => {
        signInEyes.containsText("Please enter your login credentials");
        signInEyes.seesEmailAddress();
        signInEyes.seesPassword();
        signInEyes.seesForgotPasswordText();

        signInEyes.isSignInButtonDisabled();
        signInHands.typeEmailAddress();
        signInHands.typeSigninPassword();
        signInEyes.isSignInButtonEnabled();
        signInHands.clickOnSignInButton();
        cy.wait(3000);
      });
    });
    describe("Forgotpassword Page Tests suit", () => {
      it("checks components in forgot Password page", () => {
        signInHands.clickOnForgotText();
        cy.wait(4000);
        forgotPasswordEyes.seesGoBack();
        forgotPasswordEyes.seesTitle();
        forgotPasswordEyes.seesSubText();
        forgotPasswordEyes.seesEmail();
        forgotPasswordHands.typeEmailAddress();
        cy.wait(1000);
        forgotPasswordEyes.isResetPasswordButtonEnabled();

        forgotPasswordHands.clickOnResetPasswordButton();
        cy.wait(3000);

        forgotPasswordEyes.seesOTPInputField();
      });
    });
    describe("OTP Page Test suits", () => {
      it("checks components in OTP page", () => {
        dependencies.visitOTP("OTP-validation");
        otpEyes.seesGoBack();
        otpEyes.seesTitle();
        otpEyes.seesSubText();

        otpEyes.isContinueButtonDisabled();

        otpEyes.seesResendOTP();
      });
    });
    describe("Main Test Suit", () => {
      beforeEach(() => {
        signInHands.typeEmailAddress();
        signInHands.typeSigninPassword();
        signInHands.clickOnSignInButton();
      });
      describe("CandidateInfo Component", () => {
        it("checks candidates page", () => {
          cy.wait(80000);
          candidateEyes.viewCandidateText();
          candidateEyes.viewCandidateHeader();
          candidateEyes.viewSearchBar();
          cy.wait(85000);
          candidateHands.typeSearch();
          cy.wait(40000);

          candidateEyes.candidateName();
          candidateHands.clickCandidateName();
          cy.wait(50000);

          candidateEyes.viewHeaderDetails();
          candidateHands.clickDetails();
          cy.wait(10000);

          candidateEyes.viewPreAdverseButton();
          candidateHands.clickPreAdverse();
          cy.wait(1000);

          candidateEyes.preadverseAction();
          cy.wait(5000);
          candidateHands.clickPreAdverseActions();
          cy.wait(1000);

          candidateEyes.viewPreviewNotice();
          cy.wait(2000);
          candidateHands.clickPreviewSubmit();
          cy.wait(60000);

          candidateHands.clickCandidateName();
          cy.wait(30000);
          candidateEyes.engageButton();
          cy.wait(2000);
          candidateHands.clickEngage();
          cy.wait(50000);
          candidateEyes.filter();
          cy.wait(60000);
          candidateHands.clickFilter();
          cy.wait(2000);
          candidateEyes.viewOptions();
          cy.wait(1000);
          candidateHands.selectOptions();
          cy.wait(1000);

          candidateEyes.viewExportButton();
          candidateHands.clickExportButton();
          cy.wait(1000);
          candidateEyes.viewCalendar();
          candidateEyes.viewExportReportButton();

          candidateHands.clickExportReportButton();
          cy.wait(2000);
        });
      });
      describe("Adverse Action Page", () => {
        it("test components in Adverse Action page", () => {
          adverActionsHands.clickOnAdverseActionInNav();
          cy.wait(80000);
          adverActionsEyes.seesAdverseText();
          adverActionsHands.clickLogOut();
          cy.wait(80000);
          adverActionsEyes.seesLogOutText();
          adverActionsEyes.seesLogOutBtn();
          adverActionsHands.clickLogOutButton();
        });
      });
    });
  });
});