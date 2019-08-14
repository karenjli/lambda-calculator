import React from "react";

const OperatorButton = (props) => {
  return (
    <div class = "operatordiv">
      <button class ="operatorbutton" style = {{backgroundColor: props.backgroundcolor, color: props.color}}>
        {props.operatorvalue}
      </button>
    </div>
  );
};

export default OperatorButton;