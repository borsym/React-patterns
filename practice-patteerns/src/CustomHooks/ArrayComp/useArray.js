import React, { useState } from 'react';

export const useArray = (defaultValue) => {
  const [array, setArray] = useState(defaultValue);

  const push = (value) => {
    setArray((array) => [...array, value]);
  };

  const filter = (callback) => {
    setArray((array) => array.filter(callback));
  };

  const update = (index, value) => {
    setArray((array) => [
      ...array.slice(0, index),
      value,
      ...array.slice(index + 1, array.length),
    ]);
  };

  const remove = (index) => {
    setArray((array) => [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length),
    ]);
  };

  const clear = () => {
    setArray([]);
  };
  return { array, set: setArray, push, remove, filter, update, clear };
};
