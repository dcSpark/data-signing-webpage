import React from "react";
import "./_ActionButton.scss";

const ActionButton = ({ IconButton, textButton, theme }) => {
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
