import React from "react";
import "./_CustomInput.scss";

const CustomInput = ({ inputLabel }) => (
  <div className="CustomInput">
    <label for="name" className="InputLabel">
      {inputLabel}
    </label>
    <input
      type="text"
      className="InputItem"
      id="name"
      placeholder={inputLabel}
      required=""
    />
  </div>
);

export default CustomInput;
