import Privacy_Policy from "../../../../public/assets/images/Privacy policy-pana (1) 2.svg";
import { Signin } from "../../organisms/SignIn";
import SignInTemplate from "../../templates/SignIn";

export default function SignInPage() {
  return (
    <SignInTemplate image={Privacy_Policy}>
        <Signin/>
    </SignInTemplate>
  );
}
