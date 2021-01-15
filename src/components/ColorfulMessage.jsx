import React, { Children } from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(color, children);
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
