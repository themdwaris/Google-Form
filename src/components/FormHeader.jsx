import React from "react";
import logo from "../assets/gFormLogo.png";

const FormHeader = () => {
  return (
    <div className="headerContainer lrPad">
      <div className="headerContent">
        <div className="left box">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <input type="text" placeholder="Untitled Form" />
        </div>

        <div className="right box">
          <button className="sendBtn">Sned</button>
        </div>
      </div>
      <ul className="center box">
        <li className="bborder">Questions</li>
        <li>Responses</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default FormHeader;
