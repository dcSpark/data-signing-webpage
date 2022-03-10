import React from "react";
import "./_VerificationLabel.scss";

const VerificationLabel = ({ iconVerification, text, theme }: any) => {
  const classname = `VerificationLabel ${theme}`;
  return (
    <div className={classname}>
      <img className="IconValidation" src={iconVerification} alt="" />
      <h4>{text}</h4>
    </div>
  );
};

export default VerificationLabel;
