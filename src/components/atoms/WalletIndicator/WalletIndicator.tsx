import React from "react";
import "./_WalletIndicator.scss";

const WalletIndicator = ({ iconWallet, addressWallet }: any) => (
  <div className="WalletIndicator">
    <img className="IconWallet" src={iconWallet} alt="Icon Network" />
    <p>{addressWallet.substr(0, 5)} ... {addressWallet.substr(addressWallet.length - 6)}</p>
  </div>
);

export default WalletIndicator;
