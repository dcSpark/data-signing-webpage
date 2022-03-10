import React from "react";
import ActionButton from "../../atoms/ActionButton/ActionButton";
import EmptyState from "../../atoms/EmptyState/EmptyState";
import "./_ResultContainer.scss";

const ResultContainer = ({ rewardAddr, ethAddr, signedMessage }: any) => {
  console.log("signed", signedMessage);
  return (<div className="ResultContainer">
    <div className="HeaderResult">
      <p className="ResultTitle">Result</p>
      <div className="ButtonsContainer">
        <ActionButton IconButton="/img/iconCopy.svg" textButton="Copy" />
        <span>|</span>
        {/* Use theme="Disable" for disable syles button */}
        <ActionButton
          IconButton="/img/iconDownload.svg"
          textButton="Download"
          theme="Disable"
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
