import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      <button className = "specialbutton">
        {props.value}
        {/* Display a button element rendering the data being passed down from the parent container on props */}
      </button>
    </div>
  );
};

export default SpecialButton;
