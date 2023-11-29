import React, { useState } from "react";
import Dot from "./Dot";

const Link = ({ name, color }) => {
  const [selected, setSelected] = useState(false);

  console.log(selected);

  return (
    <>
      <div
        className="link"
        onMouseEnter={() => {
          setSelected(true);
          console.log("hello");
        }}
        onMouseLeave={() => {
          setSelected(false);
          console.log("left");
        }}
      >
        {name}
      </div>
      <Dot selected={selected} color={color} />
    </>
  );
};

export default Link;
