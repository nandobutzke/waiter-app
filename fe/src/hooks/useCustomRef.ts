import { MutableRefObject, useRef } from 'react';

export const useCustomRef = <T>(): MutableRefObject<T | null> => {
  const ref = useRef<T | null>(null);

  return ref;
};
