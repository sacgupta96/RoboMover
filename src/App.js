import React, { useState } from "react";
import "./App.css";
import Box from "./Components/Box";
import { isValidPosition, isFacingValid } from "./Utils";

const SIZE = 5;

function App() {
  const [pos, setPos] = useState([null, null]);
  const [val, setVal] = useState("");
  const [facing, setFacing] = useState(null);

  const handleRobot = () => {
    const cmd = val.split(" ").filter((cmd) => cmd !== "");
    if (cmd[0].toUpperCase() === "PLACE") {
      if (isFacingValid(cmd[3]) && isValidPosition(cmd[1], cmd[2], SIZE)) {
        setPos([SIZE - cmd[2] - 1, cmd[1]]);
        setFacing(cmd[3]);
      }
    }
    if (cmd[0].toUpperCase() === "MOVE") {
      if (facing === "NORTH") {
        if (pos[0] > 0) {
          setPos((prev) => [prev[0] - 1, prev[1]]);
        }
      }
      if (facing === "SOUTH") {
        if (pos[0] < SIZE - 1) {
          setPos((prev) => [+prev[0] + 1, prev[1]]);
        }
      }
      if (facing === "EAST") {
        if (pos[1] < SIZE - 1) {
          setPos((prev) => [prev[0], +prev[1] + 1]);
        }
      }
      if (facing === "WEST") {
        if (pos[1] > 0) {
          setPos((prev) => [prev[0], prev[1] - 1]);
        }
      }
    }
    if (cmd[0].toUpperCase() === "LEFT") {
      if (facing === "NORTH") {
        setFacing("WEST");
      }
      if (facing === "EAST") {
        setFacing("NORTH");
      }
      if (facing === "SOUTH") {
        setFacing("EAST");
      }
      if (facing === "WEST") {
        setFacing("SOUTH");
      }
    }
    if (cmd[0].toUpperCase() === "RIGHT") {
      if (facing === "NORTH") {
        setFacing("EAST");
      }
      if (facing === "EAST") {
        setFacing("SOUTH");
      }
      if (facing === "SOUTH") {
        setFacing("WEST");
      }
      if (facing === "WEST") {
        setFacing("NORTH");
      }
    }
    if (cmd[0].toUpperCase() === "REPORT") {
      alert(`Robot is at x: [${pos[0]} , y: ${pos[1]}] and facing: ${facing}`);
    }
  };

  const onValueChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div class="container">
      <Box size={SIZE} pos={pos} face={facing} />
      <input onChange={onValueChange} val={val}></input>
      <button onClick={handleRobot}>Submit</button>
      {facing && (
        <p>
          Robot is at {pos[1]} , {SIZE - pos[0] - 1} facing {facing}
        </p>
      )}
    </div>
  );
}

export default App;
