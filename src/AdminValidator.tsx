import React from "react";
import ValidationResult from "./components/molecules/ValidationResult/ValidationResult";
import AdminValidatorContent from "./components/molecules/AdminValidatorContent/AdminValidatorContent";

import "./App.scss";

function AdminValidator() {
  const [verificationResult, setVerificationResult] = React.useState<any | null>(null);

  const onVerified = (result: any) => {
    console.log(result);
    setVerificationResult(result);
  };

  return (
    <div>
      <header className="App-header">
        <img src="/img/LogoMilkomeda.svg" className="App-logo" alt="logo" />
      </header>
      <div className="MainContainer">
        <h1>Validate Signed message</h1>
        <div className="Content">
          <AdminValidatorContent onVerify={onVerified} />
          <ValidationResult result={verificationResult} />
        </div>
      </div>
    </div>
  );
}

export default AdminValidator;
