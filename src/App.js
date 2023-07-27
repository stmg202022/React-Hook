import React from "react";
import UseReducerfun from "./Component/UseReducer/useReducer";
// import UserReducerTwo from "./Component/UseReducer/useReducer2";
import UseMeMOApp from "./Component/UseMemo/useMemo";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <UseMeMOApp />
      <UseReducerfun />
      {/* <UserReducerTwo /> */}
    </div>
  );
}

export default App;
