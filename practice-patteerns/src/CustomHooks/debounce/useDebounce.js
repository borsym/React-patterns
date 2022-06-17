import React, { useEffect } from 'react';
import { useTimeout } from '../timeout/useTimeout';

export const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]); // reset or dependencies change call the reset
  useEffect(clear, []);
};
