import React from "react";
import { useYourContext } from "../context/context";

const FormSection = ({ i }) => {
  const { option, setOption, select, setSelect, elem, setElem } =
    useYourContext();

  const onChangeHandler = (e) => {
    // const inputData = [...elem]
    // inputData[i]=e.target.value
    // setElem(inputData)

    if (e.target.name === "option") {
      if (e.target.value === "shortAnswer") {
        setSelect("shortAnswer");
      } else if (e.target.value === "paragraph") {
        setSelect("paragraph");
      } else if (e.target.value === "multiple") {
        setSelect("multiple");
      } else if (e.target.value === "checkboxes") {
        setSelect("checkboxes");
      }
    }

    setOption(() => ({
      ...option,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(option);
  return (
    <div className="formArea">
      <div className="sideBorder"></div>
      <div className="formAreaContent">
        <div className="formText">
          <div className="col1">
            <input
              type="text"
              placeholder="Question"
              onChange={onChangeHandler}
              name="question"
            />
          </div>
          <div className="col2">
            <div className="file">+</div>

            <select name="option" id="option" onChange={onChangeHandler}>
              <option value="shortAnswer">Short Answer</option>
              <option value="paragraph">Paragraph</option>
              <option value="multiple">Multiple choice</option>
              <option value="checkboxes">Checkboxes</option>
            </select>
          </div>
        </div>
        <div className="answerArea">
          {select === "shortAnswer" ? (
            <input
              type="text"
              placeholder="Short-answer"
              onChange={onChangeHandler}
              name="answer"
            />
          ) : select === "paragraph" ? (
            <textarea
              cols="10"
              rows="2"
              name="answer"
              placeholder="paragraph"
              onClick={onChangeHandler}
            ></textarea>
          ) : select === "multiple" ? (
            <div className="multipleChoice">
              <span>
                <input
                  className="radio"
                  type="radio"
                  name="answer"
                  onClick={onChangeHandler}
                />
                <input
                  type="text"
                  name="answer"
                  placeholder="Add options"
                  onClick={onChangeHandler}
                />
              </span>
              <button>Add</button>
            </div>
          ) : (
            <div className="multipleChoice">
              <span>
                <input
                  className="radio"
                  type="checkbox"
                  name="answer"
                  onClick={onChangeHandler}
                />
                <input
                  type="text"
                  placeholder="Add options"
                  name="answer"
                  onClick={onChangeHandler}
                />
              </span>
              <button>Add</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSection;
