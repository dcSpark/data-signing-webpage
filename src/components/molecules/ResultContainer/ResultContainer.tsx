import React from "react";
import ActionButton from "../../atoms/ActionButton/ActionButton";
import EmptyState from "../../atoms/EmptyState/EmptyState";
import "./_ResultContainer.scss";

const ResultContainer = ({ rewardAddr, ethAddr, signedMessage }: any) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const isValid = rewardAddr !== undefined && rewardAddr !== '' && ethAddr !== undefined && ethAddr !== '' && signedMessage !== undefined && signedMessage !== '';
  
  const generateJsonResult = () => {
    return {
      reward_address: rewardAddr,
      milkomeda_address: ethAddr,
      sign_messaged: signedMessage
    };
  };

  const onBtnCopyClicked = () => {
    if(!isValid) return;
    const jsonResult = generateJsonResult();
    const jsonResultStr = JSON.stringify(jsonResult);
    navigator.clipboard.writeText(jsonResultStr);
    setIsCopied(true);
  }

  const onBtnDownloadClicked = () => {
    if(!isValid) return;
    const jsonResult = generateJsonResult();
    const jsonResultStr = JSON.stringify(jsonResult);
    const blob = new Blob([jsonResultStr], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "SignedData.json";
    a.click();
  }

  return (<div className="ResultContainer">
    <div className="HeaderResult">
      <p className="ResultTitle">Result</p>
      <div className="ButtonsContainer">
        <ActionButton
          theme={isValid ? "" : "Disable"}
          IconButton="/img/iconCopy.svg"
          textButton={isCopied ? "Copied" : "Copy"}
          onClick={onBtnCopyClicked} />
        <span>|</span>
        {/* Use theme="Disable" for disable syles button */}
        <ActionButton
          theme={isValid ? "" : "Disable"}
          IconButton="/img/iconDownload.svg"
          textButton="Download"
          onClick={onBtnDownloadClicked}
        />
      </div>
    </div>
    <div className="Result">
      {/* Use this component for Empty State */}
      {rewardAddr === undefined || ethAddr === undefined || signedMessage === undefined || rewardAddr === '' || ethAddr === '' || signedMessage === '' ?
        <EmptyState text="No results yet" /> :
        <h3 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          "reward_address": "{rewardAddr}",
          <br />
          "milkomeda_address": "{ethAddr}",
          <br />
          "sign_messaged": "{signedMessage}"
        </h3>}
    </div>
  </div>);
};

export default ResultContainer;
