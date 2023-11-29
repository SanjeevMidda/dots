import React from "react";

const Dot = ({ selected, color }) => {
  return (
    <div
      className="dot"
      style={{ backgroundColor: selected ? color : "white" }}
    ></div>
  );
};

export default Dot;
