import "../App.css";
import Row from "./Row";

const Box = ({ size, pos, face }) => {
  const emp = new Array(size).fill(0);
  return (
    <div className="box">
      {emp.map((_, idx) => {
        return <Row size={size} pos={pos} face={face} index={idx} key={idx} />;
      })}
    </div>
  );
};

export default Box;
