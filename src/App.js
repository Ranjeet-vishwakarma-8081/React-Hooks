// import UseState from './component/UseState';
// import UseStateExample from './component/UseStateExample';
// import UseEffect from './component/UseEffect';
// import UseEffectExample from "./component/UseEffectExample";
import Login from "./component/useContextHook/Login.tsx";
import SignUp from "./component/useContextHook/SignUp.tsx";
import UseContext from "./component/useContextHook/UseContext.tsx";

import React from "react";

const App = () => {
  return (
    <div>
      {/* <UseState /> */}
      {/* <UseStateExample /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectExample /> */}

      <UseContext />

      <div
        style={{
          display: "flex",
          gap: 100,
          justifyContent: "center",
        }}
      >
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

export default App;
