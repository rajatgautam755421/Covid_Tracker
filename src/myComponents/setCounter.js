import React, { useState } from "react";

export default function SetCounter() {
  const [count, setCount] = useState(4);

  function decreamentCount() {
    setCount((prevcount) => prevcount - 1);
  }
  function increamentCount() {
    setCount((prevcount) => prevcount + 1);
  }
  return (
    <div className="container">
      <button onClick={decreamentCount}>-</button>
      <span>{count}</span>
      <button onClick={increamentCount}>+</button>
    </div>
  );
}
