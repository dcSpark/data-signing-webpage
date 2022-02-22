import React from "react";
import ActionButton from "../../atoms/ActionButton/ActionButton";
import EmptyState from "../../atoms/EmptyState/EmptyState";
import "./_ResultContainer.scss";

const ResultContainer = () => (
  <div className="ResultContainer">
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
      <EmptyState text="No results yet" />
      {/* <h3>
        "reward_address": "addr1...",
        <br />
        "milkomeda_address": "0xa12347sb...",
        <br />
        "sign_messaged": "lorem ipsum"
      </h3> */}
    </div>
  </div>
);

export default ResultContainer;
