import React from "react";
import "./_EmptyState.scss";

const EmptyState = ({ text }) => (
  <div className="EmptyState">
    <img className="IconEmpty" src="img/iconEmpty.svg" alt="" />
    <span className="TextGradient">{text}</span>
  </div>
);

export default EmptyState;
