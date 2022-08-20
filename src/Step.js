import React from "react";
import "./Step.css";

const Step = (props) => {
  return (
    <div>
      <label>Krok: </label>
      <input
        onChange={(event) => {
          let targetValue = event.currentTarget.value;
          props.stepMethod(targetValue);
        }}
        type="number"
        className="step-input"
      />
    </div>
  );
};

export default Step;
