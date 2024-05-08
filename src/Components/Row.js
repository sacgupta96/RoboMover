import Cell from "./Cell";
import "../App.css";

const isRobotAtCell = (pos, xIndex, yIndex) => {
  return pos[0] == xIndex && pos[1] == yIndex;
};

const Row = ({ size, pos, face, index }) => {
  const emp = new Array(size).fill(0);
  return (
    <div className="row">
      {emp.map((_, idx2) => {
        return (
          <Cell
            key={`${index}${idx2}`}
            isRobot={isRobotAtCell(pos, index, idx2)}
            face={face ? face.toLowerCase() : null}
          />
        );
      })}
    </div>
  );
};

export default Row;
