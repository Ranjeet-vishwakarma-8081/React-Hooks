import { useState } from "react";
function App() {
  const initialValue = true;
  const [text, setText] = useState(initialValue);

  console.log(text);
  const handleClick = () => {
    setText(!text);
  };

  return (
    <>
      <div>
        <h1>useState Hook</h1>
        <div>
          <p>Hello world</p>
          <button type="button" onClick={handleClick}>
            ToggleText
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
