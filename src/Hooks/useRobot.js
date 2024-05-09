import { useState } from "react";
import { isValidPosition, isFacingValid } from "../Utils";

const useRobot = (SIZE) => {
  const [robotPos, setRobotPos] = useState([null, null]);
  const [facing, setFacing] = useState(null);

  const place = (cmd) => {
    if (isFacingValid(cmd[3]) && isValidPosition(cmd[1], cmd[2], SIZE)) {
      setRobotPos([SIZE - cmd[2] - 1, cmd[1]]);
      setFacing(cmd[3]);
    }
  };

  const move = () => {
    if (facing === "NORTH") {
      if (robotPos[0] > 0) {
        setRobotPos((prev) => [prev[0] - 1, prev[1]]);
      }
    }
    if (facing === "SOUTH") {
      if (robotPos[0] < SIZE - 1) {
        setRobotPos((prev) => [+prev[0] + 1, prev[1]]);
      }
    }
    if (facing === "EAST") {
      if (robotPos[1] < SIZE - 1) {
        setRobotPos((prev) => [prev[0], +prev[1] + 1]);
      }
    }
    if (facing === "WEST") {
      if (robotPos[1] > 0) {
        setRobotPos((prev) => [prev[0], prev[1] - 1]);
      }
    }
  };

  const left = () => {
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
  };

  const right = () => {
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
  };

  const report = () => {
    alert(
      `Robot is at x: [${robotPos[1]} , y: ${
        SIZE - robotPos[0] - 1
      }] and facing: ${facing}`
    );
  };

  return { place, move, left, right, report, robotPos, facing };
};

export default useRobot;
