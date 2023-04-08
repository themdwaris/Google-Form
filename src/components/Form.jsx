import React from "react";
import FormSection from "./FormSection";
import { useYourContext } from "../context/context";

const Form = () => {
  const { elem, setElem, option } = useYourContext();
  const addHandler = () => {
    let items = [...elem, []];
    setElem(items);
  };
  return (
    <div className="formContainer">
      <div className="formContent maincontainer">
        <div>
          <div className="formTitle">
            <div className="formBorder"></div>
            <div className="titleText">
              <input type="text" placeholder="Form Title" />
              <textarea placeholder="Description" cols="10" rows="2"></textarea>
            </div>
          </div>
          {elem.map((item, index) => {
            console.log(item);
            return <FormSection key={index} data={item} i={index} />;
          })}
        </div>
        <ul className="formControlBtn">
          <li onClick={addHandler}>+</li>
          <li>+</li>
          <li>+</li>
        </ul>
        <button className="subBtn" onClick={() => console.table(option)}>Submit</button>
      </div>
      
    </div>
  );
};

export default Form;
