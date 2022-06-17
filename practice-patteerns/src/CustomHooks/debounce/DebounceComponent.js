import React, { useState } from 'react';
import { useDebounce } from './useDebounce';

export const DebounceComponent = () => {
  const [count, setCount] = useState(10);
  // good for an api, don't call every time only just when he doesn't type anything else
  useDebounce(() => alert(count), 1000, [count]); // call the func after 1 sec delay (every time reset when we press the count) if the count changes,
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
};
