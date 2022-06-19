import React from "react";

function Button({ text }) {
  const style = {
    backgroundColor: "#D09A9A",
  };
  return (
    <button
      className="btn rounded-pill text-white text-capitalize d-inline-block w-50"
      style={style}
    >
      {text}
    </button>
  );
}

export default Button;
