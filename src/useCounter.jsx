import { useState } from 'react';

export function useCounter(init) {
  const [counter, setCounter] = useState(init);
  const incrementCounter = () => setCounter(count => count + 1);
  const decrementCounter = () => setCounter(count => count - 1);
  return { counter, incrementCounter, decrementCounter };
}
