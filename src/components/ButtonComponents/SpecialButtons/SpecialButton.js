import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      <button className = "specialbutton" style = {{backgroundColor: props.backgroundcolor, color: props.color}}>
        {props.value}
      </button>
    </div>
  );
};

export default SpecialButton;
