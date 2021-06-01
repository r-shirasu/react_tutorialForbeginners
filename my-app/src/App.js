import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(true);
  };

  return (
    <div className="app">
      {/* ?はtrue, : はelseを表す */}
      <h1 className={isRed ? "red" : ""}>Change my color!!!!!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
