import React from "react";
import SignUpPage from "./components/pages/SignUpPage";
import { CandidateInfoPage } from "./components/pages/CandidateInfoPage";
import SignInPage from "./components/pages/SignInPage";
import { CandidatesPage } from "./components/pages/CandidatesPage";
import OTPPage from "./components/pages/OTPPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import { AdverseActionPage } from "./components/pages/PreAdverseAction";
import PreAdverseActionPage from "./components/pages/PreAdverseActionPage";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/OTP-validation" element={<OTPPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route
          path="/pre-adverse-action"
          element={<PreAdverseActionPage />}
        />
        <Route
          path="/adverse-actions"
          element={<AdverseActionPage/>}
        />
        <Route path="/pre-adverse-page" element={<PreAdverseActionPage/>}/>
        <Route path="/candidates" element={<CandidatesPage/>} />
        <Route path="/candidates-info" element={<CandidateInfoPage/>} />
        <Route path="/candidates/:id" element={<CandidateInfoPage/>} />
      </Routes>
    </>
  );
};
export default App;
