import React from "react";

const NumberButton = (props) => {
  const styles = {
    backgroundColor: props.backgroundcolor,
    color: props.color,
    width: props.value==="0" ? "120px" : "50px",
    fontSize: "26px",
    height: "50px"
  }
  return (
    <div>
      <button className = "numberbutton" style = {styles}>
          {props.value}
      </button>
    </div>
  );
};

export default NumberButton;
