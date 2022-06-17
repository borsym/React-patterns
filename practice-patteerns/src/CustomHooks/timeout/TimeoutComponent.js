import React, { useState } from 'react';
import { useTimeout } from './useTimeout';

export const TimeoutComponent = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(1), 1000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
