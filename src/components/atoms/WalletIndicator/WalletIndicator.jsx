import React from "react";
import "./_WalletIndicator.scss";

const WalletIndicator = ({ iconWallet, addressWallet }) => (
  <div className="WalletIndicator">
    <img className="IconWallet" src={iconWallet} alt="Icon Network" />
    <p>{addressWallet}</p>
  </div>
);

export default WalletIndicator;
