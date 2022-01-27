import React, { useState, useEffect } from 'react';

function Example() {

 // Declare a new state variable, which we'll call "count"
 const [count, setCount] = useState(0);

 useEffect(() => {
    // It will call this function any time we mount this component
    console.log("hello!")
  }, []);

  return (
    <div>
    <h2>This is a Functional Component</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example