import { useMemo, useState } from "react";

import React from "react";

const UseMeMoApp = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const increaseNum1 = () => setNum1(num1 + 1);
  const increaseNum2 = () => setNum2(num2 + 1);

  // It takes a time to load on bothsides of the num1 and num2 state when ever the state changes
  //   const isEven = () => {
  //     for (let i = 0; i < 2000000000; i++) {}
  //     return num1 % 2 === 0;
  //   };

  //it takes a time to load on only when the num1 state changes
  const isEven = useMemo(() => {
    for (let i = 0; i < 2000000000; i++) {}
    return num1 % 2 === 0;
  }, [num1]);

  return (
    <div>
      <button onClick={increaseNum1}>NUM1</button>
      {/* {isEven() ? "Even" : "Odd"} */}
      {isEven ? "Even" : "Odd"}

      <p>{num1}</p>

      {/*  */}
      <br />
      <button onClick={increaseNum2}>NUM2</button>
      <p>{num2}</p>
    </div>
  );
};

export default UseMeMoApp;
