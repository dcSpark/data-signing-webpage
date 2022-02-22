import React from "react";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CustomTextarea from "../../atoms/CustomTextarea/CustomTextarea";
import "./_AdminValidatorContent.scss";

const AdminValidatorContent = () => (
  <div className="AdminValidatorContent">
    <CustomTextarea textLabel="Signed Data" />
    <CustomButton
      type="primary"
      htmlType="submit"
      text="Verify"
      theme="primary"
    />
  </div>
);

export default AdminValidatorContent;
