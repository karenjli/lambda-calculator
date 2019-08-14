import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button className = "numberbutton" style = {{backgroundColor: props.backgroundcolor, color: props.color, width: props.value==="0" ? "120px" : "50px"}}>
          {props.value}
        
         
      </button>
    </div>
  );
};

export default NumberButton;
