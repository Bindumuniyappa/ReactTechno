import React from "react";

const CounterComp = () => {
  // Write a simple counter component that increments and decrements a value using useState.
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter Component</h1>
      <span className="border btn btn-info p-2 w-25 m-4">Count: {count}</span>
      <br />

      <button className="btn btn-primary m-5" onClick={increment}>
        Increment
      </button>
      <button className=" btn btn-success m-4" onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default CounterComp;
