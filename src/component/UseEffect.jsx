// use of useEffect

import React from "react";

const UseEffect = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;

    if (count === 5)
      console.log(
        `The count value is : ${count} and it's typeof ${typeof count}`
      );
  }, [count]); // Only re-run the effect if count changes
  return (
    <>
      <h1>UseEffect Hooks---</h1>
      <h2>Count is {count} </h2>
      {count===5 || count === 10? <p>Now Count value is - {count}</p>:null}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  );
};

export default UseEffect;