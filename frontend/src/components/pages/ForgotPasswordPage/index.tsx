import React from 'react'
import SignInTemplate from '../../templates/SignIn'
import { ForgotPassword } from '../../molecules/ForgotPassword'
import Privacy_Policy from "../../../../public/assets/images/Privacy policy-pana (1) 2.svg"

const ForgotPasswordPage = () => {
  return (
    <SignInTemplate image={Privacy_Policy}>
      <ForgotPassword />
    </SignInTemplate>
  );
}

export default ForgotPasswordPage