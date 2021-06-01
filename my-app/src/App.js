import React from "react";
import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="spring" message="春だね" />
      <Tweet name="summer" message="夏だね" />
      <Tweet name="autmun" message="秋だね" />
      <Tweet name="winter" message="冬だね" />
    </div>
  );
}

export default App;
