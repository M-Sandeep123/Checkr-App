import Privacy_Policy from "../../../../public/assets/images/Privacy policy-pana (1) 2.svg";
import { SignUp } from "../../organisms/SignUp";
import SignInTemplate from "../../templates/SignIn";

export default function SignUpPage() {
  return (
    <SignInTemplate image={Privacy_Policy}>
      <SignUp />
    </SignInTemplate>
  );
}
