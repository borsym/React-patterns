import React from 'react';
import { useArray } from './useArray';

export const ArrayComponent = () => {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <div>
      <div>{array.join(', ')}</div>
      <button onClick={() => push(7)}>push 7</button>
      <button onClick={() => update(1, 9)}>change s, el to 9</button>
      <button onClick={() => remove(1)}>remove s</button>
      <button onClick={() => filter((n) => n <= 3)}>filter</button>
      <button onClick={() => set([1, 2])}>Set to 1,2</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
