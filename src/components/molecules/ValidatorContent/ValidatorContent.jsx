import React from "react";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CustomInput from "../../atoms/CustomInput/CustomInput";
import ResultContainer from "../ResultContainer/ResultContainer";
import "./_ValidatorContent.scss";

const ValidatorContent = ({ iconWallet, addressWallet }) => (
  <div className="ValidatorContent">
    <CustomInput inputLabel="Reward Address" />
    <CustomInput inputLabel="Milkomeda Address" />
    <CustomButton
      type="primary"
      htmlType="submit"
      text="Sign to verify"
      theme="primary"
    />
    <ResultContainer />
  </div>
);

export default ValidatorContent;
