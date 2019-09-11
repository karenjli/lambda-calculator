import React, {Component, useState} from "react";
//import NumberButton from "./NumberButton";
import NumberButton from "./NumberButton";
import {numbers} from "../../../data.js";
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState ({numbers});
  const [backgroundcolor, setBackgroundcolor] = useState ("#1f295d");
  const [color, setColor] = useState ("white")
  console.log(useState());

  return (
    <div className = "numberholder">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbers.map (number => <NumberButton value = {number} backgroundcolor = {backgroundcolor} color = {color} />)}
       
    </div>
  );
};

export default Numbers;