import React from "react";

function Navigator({ text ,href}) {
  const style = {
    backgroundColor: "#D09A9A",
  };
  return (
    <a
      className="btn rounded-pill text-white text-capitalize d-inline-block w-50"
      style={style}
      href={href}
      target="blank"
    >
      {text}
    </a>
  );
}

export default Navigator;
