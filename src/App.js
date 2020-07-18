import React from "react";
import "./styles.css";

import Counter from "./counter";
import ToggleMe from "./toggleMe";
import MoveText from "./moveText";

export default function App() {
  return (
    <div className="App">
      <h1>React Magic</h1>

      <Counter />

      <br />

      <ToggleMe />

      <br />

      <MoveText />
    </div>
  );
}
