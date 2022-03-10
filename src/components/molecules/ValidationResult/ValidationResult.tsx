import React from "react";
// import EmptyState from "../../atoms/EmptyState/EmptyState";
import VerificationLabel from "../../atoms/VerificationLabel/VerificationLabel";
import WalletAddress from "../../atoms/WalletAddress/WalletAddress";
import "./_ValidationResult.scss";

const ValidationResult = () => (
  <div className="ValidationResult">
    <div className="Title">
      <h3>Validation Result</h3>
    </div>
    <div className="ValidationContent">
      {/* <EmptyState text="No results yet" /> */}
      <div className="WalletsContainer">
        <WalletAddress textLabel="Reward Address" text="0xB769…0182" />
        <WalletAddress textLabel="Ethereum Address" text="0xB769…0182" />
      </div>
      <VerificationLabel
        text="Verified!"
        iconVerification="img/IconCheck.svg"
        theme="Valid"
      />
      <VerificationLabel
        text="Not Verified!"
        iconVerification="img/iconCross.svg"
        theme="Invalid"
      />
    </div>
  </div>
);

export default ValidationResult;
