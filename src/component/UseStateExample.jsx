// Use of useState() in Complex term

import React from "react";
import { useState } from "react";

const UseStateExample = () => {
  const [inputText, setInputText] = useState("");

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div>
      <label htmlFor="input">Enter your name : </label>
      <input type="text" name="input" id="input" onChange={handleInputText} />
      <h1>Hello, {inputText}!</h1>
    </div>
  );
};

export default UseStateExample;
