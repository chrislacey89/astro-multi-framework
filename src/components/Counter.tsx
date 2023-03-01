import "./Counter.css";
import { useEffect } from "react";
import { useStore } from '@nanostores/react';
import { count, addOne, subtractOne } from '../countStore';

export default function Counter({
  children,
  count: initialCount,
}: {
  children: JSX.Element;
  count: number;
}) {
  const currentCount = useStore(count);


  useEffect(() => {
    count.set(initialCount);
  },[])

  return (
    <>
      <div className="counter">
        <button className="btn" onClick={subtractOne}>-</button>
        <pre>{currentCount}</pre>
        <button className="btn btn-glass" onClick={addOne}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}
