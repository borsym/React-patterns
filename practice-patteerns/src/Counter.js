import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [count]);
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <h1>{count2}</h1>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
      </div>
    </>
  );
};
