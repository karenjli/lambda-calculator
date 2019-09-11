import React, {Component, useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data.js";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState ({operators});
  console.log(useState());
  const [backgroundcolor, setBackgroundcolor] = useState ("steelblue");
  const [color, setColor] = useState ("white");
  
  return (
    <div class = "operatorholder">
     
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component
       numbers.map (number => {prop.numbers === number})
       */}
       {operators.map(operator => <OperatorButton operatorvalue = {operator.char} backgroundcolor = {backgroundcolor} color = {color} />)}
    </div>
  );
};

export default Operators;
