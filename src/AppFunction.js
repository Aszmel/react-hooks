import React, { useState } from "react";

const AppFunction = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const handleCount = () => setCount(prevCount => prevCount + 1);
  const handleReset = () => setCount(0);
  const changeColor = () => setIsOn(!isOn);

  return (
    <div>
      <h2>Toggle buttons</h2>
      <button onClick={handleCount}>This was clicked {count} times</button>
      <button onClick={handleReset}>Reset count button</button>
      <h2> Toggle background </h2>
      <div
        style={{
          height: "200px",
          width: "200px",
          background: isOn ? "red" : "green"
        }}
        onClick={changeColor}
      />
    </div>
  );
};

export default AppFunction;
