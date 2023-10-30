import SignInTemplate from "../../templates/SignIn";
import Privacy_Policy from "../../../../public/assets/images/Privacy policy-pana (1) 2.svg";
import OTPInputSection from "../../molecules/OTPSection";

const OTPPage = () => {
  return (
    <SignInTemplate image={Privacy_Policy}>
      <OTPInputSection />
    </SignInTemplate>
  );
};

export default OTPPage;
