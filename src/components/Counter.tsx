import "./Counter.css";
import { ReactNode, useEffect } from "react";
import { useStore } from '@nanostores/react';
import { count, addOne, subtractOne } from '../countStore';
type PropsWithChildren<P> = P & { children?: ReactNode }

export default function Counter({
  count: initialCount,
}: {
  count: number;
}) {
  const currentCount = useStore(count);


  useEffect(() => {
    count.set(initialCount);
  },[])
// 
  return (
    <>
    {/* @ts-expect-error */}
      <div className="counter">
        <button className="btn" onClick={subtractOne}>-</button>
        <pre>{currentCount}</pre>
        <button className="btn btn-glass" onClick={addOne}>+</button>
      </div>
      <div className="counter-message">hey</div>
    </>
  );
}
