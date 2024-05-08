import "../App.css";

const Cell = ({ isRobot, face }) => {
  return (
    <div
      className={"cell " + (isRobot ? "robot " : "") + (isRobot ? face : "")}
    ></div>
  );
};

export default Cell;
