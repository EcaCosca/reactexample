import React, { useState } from "react";
import "./styles.css";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const increaseAll = () => {
    setCount1(count1 + 1)
    setCount2(count2 + 1)
    setCount3(count3 + 1)
  }

  const decreaseAll = () => {
    setCount1(count1 - 1)
    setCount2(count2 - 1)
    setCount3(count3 - 1)
  }

  return (
    <>

      <div class="block">
        <em>Put your counters here</em>
        <p>You clicked {count1} times</p>
        <button onClick={() => setCount1(count1 + 1)}>Increase by 1</ button>
        <button onClick={() => setCount1(count1 - 1)}>Decrease by 1</ button>
        <p>You clicked {count2} times</p>
        <button onClick={() => setCount2(count2 + 1)}>Increase by 1</ button>
        <button onClick={() => setCount2(count2 - 1)}>Decrease by 1</ button>
        <p>You clicked {count3} times</p>
        <button onClick={() => setCount3(count3 + 1)}>Increase by 1</ button>
        <button onClick={() => setCount3(count3 - 1)}>Decrease by 1</ button>
        <p>MainControls</p>
        <button onClick={() => increaseAll()}>Increase by 1</ button>
        <button onClick={() => decreaseAll()}>Decrease by 1</ button>
      </div>
    </>
  );
}
