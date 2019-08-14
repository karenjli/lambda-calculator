import React from "react";

const Display = (props) => {
  const style = {
    color: "white",
    textAlign: "right",
    fontSize: "32px",
    paddingRight: "20px",
    paddingTop: "10px"
  }

  return <div className = "displayBox" style = {style}>{props.displayvalue}{/* Display any props data here */}</div>;
};

export default Display;