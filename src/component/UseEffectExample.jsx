// use of useEffect in Complex Term...

import React, { useEffect } from "react";

const App = () => {
  async function fetchAllProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    fetchAllProducts();
  });
  return (
    <div>
      <h1>UseEffect hooks...</h1>
    </div>
  );
};

export default App;
