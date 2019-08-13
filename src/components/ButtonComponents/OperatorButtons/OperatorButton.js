import React from "react";

const OperatorButton = (props) => {
  return (
    <div>
      <button>
        {props.operatorvalue}
      </button>
    </div>
  );
};

export default OperatorButton;