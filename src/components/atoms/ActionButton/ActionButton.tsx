import React from "react";
import "./_ActionButton.scss";

const ActionButton = ({ IconButton, textButton, theme }: any) => {
  const classname = `Button ${theme}`;
  return (
    <div className="ActionButton">
      <button className={classname}>
        <img className="IconButton" src={IconButton} alt="" />
        <p>{textButton}</p>
      </button>
    </div>
  );
};

export default ActionButton;
