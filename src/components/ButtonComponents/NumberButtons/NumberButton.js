import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button className = "numberbutton">
          {props.value}
      </button>
    </div>
  );
};

export default NumberButton;
