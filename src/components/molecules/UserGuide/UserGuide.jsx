import React from "react";
import "./_UserGuide.scss";

const UserGuide = () => (
  <div className="UserGuide">
    <div className="Title">
      <img className="IconTitle" src="/img/iconQuestion.svg" alt="" />
      <h3>User Guide</h3>
    </div>
    <div className="GuideContent">
      <div className="Label">
        <span>STEP 1</span>
      </div>
      <h4>Give priority of access to your delegators</h4>
      <p>
        Start by signing a message using your delegation private key so then we
        can verify that you are actually delegating to them.
      </p>
      <hr />
      <div className="Label">
        <span>STEP 2</span>
      </div>
      <h4>Copy and send Data Result</h4>
      <p>
        Once you get the data result copy it and send it to us through{" "}
        <a href="/">this link</a>
      </p>
    </div>
  </div>
);

export default UserGuide;
