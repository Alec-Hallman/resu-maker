import { useState } from "react";
import "./CompStyles.css";
const DescriptionMap = ({ descriptions, list }) => {
  return (
    <>
      {descriptions.map((description, index) => {
        return (
          <>
            <p>{description}</p>
            <input
              onChange={(e) => {
                list[index] = e.target.value;
              }}
            ></input>
          </>
        );
      })}
    </>
  );
};
export default DescriptionMap;

//Get passed a list, and a set list function. on change use the index to set that index value
//to what was typed in.
