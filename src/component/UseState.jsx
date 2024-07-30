import React from "react";
import { useState } from "react";

const UseState = () => {
  const initialValue = true;
  const [text, setText] = useState(initialValue);

  const handleClick = () => {
    setText(!text);
  };

  return (
    <>
      <div>
        <h1>useState Hook</h1>
        <div>
          <button type="button" onClick={handleClick}>
            ToggleText
          </button>
          {text ? <p>Hello world</p> : null}
        </div>
      </div>
    </>
  );
};

export default UseState;
