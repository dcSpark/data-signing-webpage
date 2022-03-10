import React, { useEffect } from 'react';
import WalletIndicator from './components/atoms/WalletIndicator/WalletIndicator';
import UserGuide from './components/molecules/UserGuide/UserGuide';
import ValidatorContent from './components/molecules/ValidatorContent/ValidatorContent';
import './App.scss';
import CardanoLoader from './CardanoLoader';
import CustomButton from './components/atoms/CustomButton/CustomButton';
import { Bifrost } from '@saib/cardano-bifrost';
import { getUsableWallet } from './WalletHelper';

function FastTrack() {

  const [isConnecting, setIsConnecting] = React.useState(false);
  const [isCardanoLoaded, setIsCardanoLoaded] = React.useState(false);
  const [isConnected, setIsConnected] = React.useState(false);
  const [walletAddress, setWalletAddress] = React.useState('');
  const [cborWalletAddress, setCborWalletAddress] = React.useState('');
  const [Cardano, setCardano] = React.useState<null | typeof import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib')>(null);
  const [walletImg, setWalletImg] = React.useState('');

  const onConnectClicked = async () => {
    setIsConnecting(true);
    const wallet = getUsableWallet();
    if (wallet !== null) {
      setWalletImg(wallet.icon);
      const isEnabled = await Bifrost.enableAsync(wallet.id);
      const walletAddress = await Bifrost.getUsedAddressesRawAsync();
      if (walletAddress !== undefined && walletAddress.length > 0) {
        setCborWalletAddress(walletAddress[0]);
        setIsConnected(isEnabled);
      }
    }
    else {
      alert('No Cardano Wallet found. Please install one.');
    }
    setIsConnecting(false);
  };


  useEffect(() => {
    const loadCardanoAsync = async () => {
      await CardanoLoader.LoadAsync();
      setCardano(CardanoLoader.Cardano);
      setIsCardanoLoaded(true);
    };

    loadCardanoAsync();
  }, []);

  useEffect(() => {
    const onPageLoadAsync = async () => {
      const wallet = getUsableWallet();
      if (wallet !== null) {
        setIsConnecting(true);
        const isEnabled = await Bifrost.isEnabledAsync(wallet.id);
        if (isEnabled) {
          setWalletImg(wallet.icon);
          await Bifrost.setWalletAsync(wallet.id);
          const addresses = await Bifrost.getUsedAddressesRawAsync();
          if (addresses !== undefined && addresses.length > 0) {
            setCborWalletAddress(addresses[0]);
            setIsConnected(true);
          }
        }
        setIsConnecting(false);
      }
    };

    if (isCardanoLoaded)
      onPageLoadAsync();

  }, [isCardanoLoaded]);

  useEffect(() => {
    const cborAddrToBech32 = (cborAddr: string) => {
      return Cardano?.Address.from_bytes(
        Buffer.from(cborAddr, 'hex')
      ).to_bech32();
    };

    try {
      const walletAddr = cborAddrToBech32(cborWalletAddress);
      if (walletAddr !== undefined) setWalletAddress(walletAddr);
    }
    catch {
      // do nothing
    }
  }, [cborWalletAddress, Cardano]);

  return (
    <div>
      <header className="App-header">
        <img src="/img/LogoMilkomeda.svg" className="App-logo" alt="logo" />
        {isConnected ?
          <WalletIndicator
            iconWallet={walletImg}
            addressWallet={walletAddress}
          /> :
          (<>{
            isConnecting ?
              <CustomButton
                type="submit"
                text="Connecting..."
                theme="primary"
              /> : <CustomButton
                type="submit"
                text="Connect"
                theme="primary"
                onClick={onConnectClicked}
              />
          }
          </>)
        }
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
