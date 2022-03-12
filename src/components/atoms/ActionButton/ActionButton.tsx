import React from "react";
import "./_ActionButton.scss";

const ActionButton = ({ IconButton, textButton, theme, onClick }: any) => {
  const classname = `Button ${theme}`;
  return (
    <div className="ActionButton">
      <button className={classname} onClick={onClick}>
        <img className="IconButton" src={IconButton} alt="" />
        <p>{textButton}</p>
      </button>
    </div>
  );
};

export default ActionButton;
