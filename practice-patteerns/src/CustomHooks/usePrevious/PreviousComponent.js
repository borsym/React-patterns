import React, { useState } from 'react';
import { usePrevious } from './usePrevious';

export const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Mate');
  const previousCount = usePrevious(count);
  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <div>{name}</div>
      <button onClick={() => setName('Jhon')}>+</button>
    </div>
  );
};
