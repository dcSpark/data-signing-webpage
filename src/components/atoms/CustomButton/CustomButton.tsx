import React from "react";
import "./_CustomButton.scss";

const CustomButton = ({ text, theme, type, onClick }: any) => {
  const classname = `CustomButton ${theme}`;
  return (
    <button
      type={type ? type : "button"}
      className={classname}
      onClick={onClick}
    >
      <p className="ButtonText">{text}</p>
    </button>
  );
};

export default CustomButton;
