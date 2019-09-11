import React, {Component, useState} from "react";
import SpecialButton from "./SpecialButton";
import {specials} from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = useState ({specials});
  const [backgroundcolor, setBackgroundcolor] = useState ("#00407c");
  const [color, setColor] = useState ("white")
  return (
    <div className = "specialholder">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specials.map (special => <SpecialButton value= {special} backgroundcolor = {backgroundcolor} color = {color}/>)}
    </div>
  );
};

export default Specials;