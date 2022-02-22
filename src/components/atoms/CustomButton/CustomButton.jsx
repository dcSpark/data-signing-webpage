import React from "react";
import "./_CustomButton.scss";

const CustomButton = ({ text, theme, type, htmlType }) => {
  const classname = `CustomButton ${theme}`;
  return (
    <button
      type={type ? type : "button"}
      htmlType={htmlType}
      className={classname}
    >
      <p className="ButtonText">{text}</p>
    </button>
  );
};

export default CustomButton;
