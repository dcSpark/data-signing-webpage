import React from "react";
import "./_CustomInput.scss";

const CustomInput = ({ inputLabel, value, isReadOnly, onChange}: any) => (
  <div className="CustomInput">
    <label htmlFor="name" className="InputLabel">
      {inputLabel}
    </label>
    <input
      type="text"
      className="InputItem"
      id="name"
      placeholder={inputLabel}
      required
      value={value}
      readOnly={isReadOnly}
      onChange={onChange}
    />
  </div>
);

export default CustomInput;
