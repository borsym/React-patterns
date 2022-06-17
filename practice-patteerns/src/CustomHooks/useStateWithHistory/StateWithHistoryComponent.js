import React, { useState } from 'react';
import { useStateWithHistory } from './useStateWithHistory';

export const StateWithHistoryComponent = () => {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1);
  const [name, setName] = useState('mate');
  return (
    <div>
      <div>{count}</div>

      <div>{pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount((count) => count * 2)}>Double</button>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={back}>back</button>
      <button onClick={forward}>forward</button>
      <button onClick={() => go(2)}>Go TO index2</button>
      <button onClick={() => setName('cica')}>Change Name</button>
    </div>
  );
};
