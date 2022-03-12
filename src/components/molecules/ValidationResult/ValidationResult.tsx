import React from "react";
// import EmptyState from "../../atoms/EmptyState/EmptyState";
import VerificationLabel from "../../atoms/VerificationLabel/VerificationLabel";
import WalletAddress from "../../atoms/WalletAddress/WalletAddress";
import "./_ValidationResult.scss";

const ValidationResult = ({ result }: any) => {

  const elipseMiddle = (text: string) => {
    return text.substring(0, 5) + "..." + text.substring(text.length - 6);
  };

  return (
    <div className="ValidationResult">
      <div className="Title">
        <h3>Validation Result</h3>
      </div>
      <div className="ValidationContent">
        {/* <EmptyState text="No results yet" /> */}
        <div className="WalletsContainer">
          <WalletAddress textLabel="Reward Address" text={result !== undefined && result !== null ? elipseMiddle(result.reward_address) : ''} />
          <WalletAddress textLabel="Ethereum Address" text={result !== undefined && result !== null ? elipseMiddle(result.milkomeda_address) : ''} />
        </div>
        {result !== undefined && result !== null && (
          <>{result.isVerified ?
            (
              <VerificationLabel
                text="Verified!"
                iconVerification="img/IconCheck.svg"
                theme="Valid"
              />
            ) : (
              <VerificationLabel
                text="Not Verified!"
                iconVerification="img/iconCross.svg"
                theme="Invalid"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ValidationResult;
