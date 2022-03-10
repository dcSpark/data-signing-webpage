import React from "react";
import "./_CustomTextarea.scss";

const CustomTextarea = ({ textLabel }: any) => (
  <div className="CustomTextarea">
    <label htmlFor="name" className="TextLabel">
      {textLabel}
    </label>
    <textarea className="TextareaComponent" rows={5} placeholder="Copy Signed Data Json"></textarea>
  </div>
);

export default CustomTextarea;
