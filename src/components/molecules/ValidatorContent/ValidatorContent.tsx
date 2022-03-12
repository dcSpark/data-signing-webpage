import { Bifrost } from '@saib/cardano-bifrost';
import React, { useEffect } from 'react';
import CardanoLoader from '../../../CardanoLoader';
// import MessageSignLoader from '../../../MessageSignLoader';
import { getUsableWallet } from '../../../WalletHelper';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import CustomInput from '../../atoms/CustomInput/CustomInput';
import ResultContainer from '../ResultContainer/ResultContainer';
import './_ValidatorContent.scss';

const ValidatorContent = ({ isConnected }: any) => {
  const [Cardano, setCardano] = React.useState<null | typeof import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib')>(null);
  // const [MessageSign, setMessageSign] = React.useState<typeof import('@emurgo/cardano-message-signing-browser') | null>(null);
  const [isCardanoLoaded, setIsCardanoLoaded] = React.useState(false);
  const [rewardAddress, setRewardAddress] = React.useState('');
  const [rewardAddressCborHex, setRewardAddressCborHex] = React.useState('');
  const [ethAddress, setEthAddress] = React.useState('');
  const [COSEignHex, setCOSESignHex] = React.useState<string>('');

  useEffect(() => {
    const loadCardanoAsync = async () => {
      await CardanoLoader.LoadAsync();
      // await loadMessageSign();
      setCardano(CardanoLoader.Cardano);
      setIsCardanoLoaded(true);
    };

    // const loadMessageSign = async () => {
    //   await MessageSignLoader.LoadAsync();
    //   setMessageSign(MessageSignLoader.MessageSign);
    // };

    loadCardanoAsync();
  }, []);

  useEffect(() => {
    const loadRewardAddress = async () => {
      if (Cardano !== null) {
        const rewardAddresses = await Bifrost.getRewardAddressesAsync();
        if (rewardAddresses !== undefined && rewardAddresses.length > 0) {
          const rewardAddrCbor = rewardAddresses[0];
          setRewardAddressCborHex(rewardAddrCbor);
          const rewardAddr = Cardano.Address.from_bytes(Buffer.from(rewardAddrCbor, 'hex'))
          setRewardAddress(rewardAddr.to_bech32());
        }
      }
    };

    if (isConnected && Cardano !== null) loadRewardAddress();
  }, [isConnected, Cardano]);

  useEffect(() => {
    const onPageLoadAsync = async () => {
      const wallet = getUsableWallet();
      if (wallet !== null) {
        const isEnabled = await Bifrost.isEnabledAsync(wallet.id);
        if (isEnabled) {
          await Bifrost.setWalletAsync(wallet.id);
        }
      }
    };

    if (isCardanoLoaded)
      onPageLoadAsync();

  }, [isCardanoLoaded]);

  const onSignClicked = async () => {
    if (isCardanoLoaded && isConnected && rewardAddress !== '') {
      const signed = await Bifrost.signDataRawAsync(
        rewardAddressCborHex,
        Buffer.from(ethAddress, 'ascii').toString('hex')
      );
      setCOSESignHex(signed);
    }
  };

  return (
    <div className="ValidatorContent">
      <CustomInput inputLabel="Reward Address" value={rewardAddress} isReadOnly={true} />
      <CustomInput inputLabel="Milkomeda Address" value={ethAddress} onChange={(e: any) => setEthAddress(e.target.value)} />
      <CustomButton
        type="submit"
        text="Sign to verify"
        theme="primary"
        onClick={onSignClicked}
      />
      <ResultContainer rewardAddr={rewardAddress} ethAddr={ethAddress} signedMessage={COSEignHex} />
    </div>);
};

export default ValidatorContent;
