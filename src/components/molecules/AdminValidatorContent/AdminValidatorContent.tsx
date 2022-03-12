import React, { useEffect } from "react";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CustomTextarea from "../../atoms/CustomTextarea/CustomTextarea";
import MessageSignLoader from "../../../MessageSignLoader";
import "./_AdminValidatorContent.scss";
import CardanoLoader from "../../../CardanoLoader";

const AdminValidatorContent = ({ onVerify }: any) => {
  const [signedMessage, setSignedMessage] = React.useState("");
  const [MessageSign, setMessageSign] = React.useState<null | typeof import('@emurgo/cardano-message-signing-browser')>(null);
  const [Cardano, setCardano] = React.useState<null | typeof import('@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib')>(null);

  const onChanged = (e: any) => {
    setSignedMessage(e.target.value);
  };

  const verifySignedMessage = () => {
    try {
      if (MessageSign !== null && Cardano !== null) {
        const signedJson = JSON.parse(signedMessage);
        let message = MessageSign.COSESign1.from_bytes(Buffer.from(Buffer.from(signedJson.sign_messaged, 'hex') as any, 'hex'));
        const headermap = message.headers().protected().deserialized_headers();
        const headers = {
          algorithmId: headermap.algorithm_id()?.as_int()?.as_i32() ?? null,
          address: Cardano.Address.from_bytes(headermap.header(MessageSign.Label.new_text('address'))?.as_bytes() ?? new Uint8Array(0)),
          publicKey: Cardano.PublicKey.from_bytes(headermap.key_id() ?? new Uint8Array(0))
        };

        const ethAddrPayload = Buffer.from(message.payload() as Uint8Array).toString('ascii');
        const cardanoRewardAddrPayload = headers.address.to_bech32();
        const isVerified = headers.publicKey.verify(message.signed_data().to_bytes(), Cardano.Ed25519Signature.from_bytes(message.signature())) &&
          signedJson.milkomeda_address === ethAddrPayload &&
          signedJson.reward_address === cardanoRewardAddrPayload;

        onVerify({
          milkomeda_address: signedJson.milkomeda_address,
          reward_address: signedJson.reward_address,
          isVerified
        });
      }
    }
    catch {
      onVerify({
        milkomeda_address: '',
        reward_address: '',
        isVerified: false
      });
    }
  }

  useEffect(() => {
    const loadMessageSign = async () => {
      await MessageSignLoader.LoadAsync();
      setMessageSign(MessageSignLoader.MessageSign);
    };

    const loadCardano = async () => {
      await CardanoLoader.LoadAsync();
      setCardano(CardanoLoader.Cardano);
    };

    loadMessageSign();
    loadCardano();
  }, [])

  return (
    <div className="AdminValidatorContent">
      <CustomTextarea textLabel="Signed Data" value={signedMessage} onChange={onChanged} />
      <CustomButton
        type="submit"
        text="Verify"
        theme="primary"
        onClick={verifySignedMessage}
      />
    </div>
  );
};

export default AdminValidatorContent;
