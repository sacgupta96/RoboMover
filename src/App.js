import React, { useState } from "react";
import "./App.css";
import Box from "./Components/Box";
import useRobot from "./Hooks/useRobot";

const SIZE = 5;

function App() {
  const [val, setVal] = useState("");

  const { place, move, left, right, report, robotPos, facing } = useRobot(SIZE);

  const handleRobot = () => {
    const cmd = val.split(" ").filter((cmd) => cmd !== "");
    if (cmd[0].toUpperCase() === "PLACE") {
      place(cmd);
    }
    if (cmd[0].toUpperCase() === "MOVE") {
      move();
    }
    if (cmd[0].toUpperCase() === "LEFT") {
      left();
    }
    if (cmd[0].toUpperCase() === "RIGHT") {
      right();
    }
    if (cmd[0].toUpperCase() === "REPORT") {
      report();
    }
  };

  const onValueChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div class="container">
      <Box size={SIZE} pos={robotPos} face={facing} />
      <input onChange={onValueChange} val={val}></input>
      <button onClick={handleRobot}>Submit</button>
      {facing && (
        <p>
          Robot is at {robotPos[1]} , {SIZE - robotPos[0] - 1} facing {facing}
        </p>
      )}
    </div>
  );
}

export default App;
