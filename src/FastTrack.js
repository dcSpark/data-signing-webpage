import React from "react";
import WalletIndicator from "./components/atoms/WalletIndicator/WalletIndicator";
import UserGuide from "./components/molecules/UserGuide/UserGuide";
import ValidatorContent from "./components/molecules/ValidatorContent/ValidatorContent";

import "./App.scss";

function FastTrack() {
  return (
    <div>
      <header className="App-header">
        <img src="/img/LogoMilkomeda.svg" className="App-logo" alt="logo" />
        <WalletIndicator
          iconWallet="/img/iconFlint.png"
          addressWallet="0xB769…0182"
        />
      </header>
      <div className="MainContainer">
        <h1>Fast Track to Access Milkomeda</h1>
        <div className="Content">
          <ValidatorContent />
          <UserGuide />
        </div>
      </div>
    </div>
  );
}

export default FastTrack;
