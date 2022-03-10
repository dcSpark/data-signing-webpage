import React from "react";
import "./_WalletAddress.scss";

const WalletAddress = ({ textLabel, text }: any) => (
  <div className="WalletAddress">
    <p className="WalletLabel">{textLabel}</p>
    <div className="AddressContent">
      <img className="IconValidation" src="img/iconWallet.svg" alt="" />
      <h4>{text}</h4>
    </div>
  </div>
);

export default WalletAddress;
