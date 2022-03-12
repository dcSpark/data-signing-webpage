import React from "react";
import "./_WalletIndicator.scss";

const WalletIndicator = ({ iconWallet, addressWallet }: any) => (
  <div className="WalletIndicator">
    <img className="IconWallet" src={iconWallet} alt="Icon Network" />
    <p>{addressWallet.substring(0, 5)} ... {addressWallet.substring(addressWallet.length - 6)}</p>
  </div>
);

export default WalletIndicator;
