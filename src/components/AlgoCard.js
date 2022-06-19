import React from "react";
import styled from "styled-components";
import Button from "./Button";

import NavButton from "./NavButton";
let style = {
  borderRadius: "20px",
  backgroundColor: "#E8B4B4",
  opacity: "0.72",
};

function AlgoCard({ title, logo, url }) {
  return (
    <div className="col-3" style={style}>
      <h3 className="text-capitalize text-center col-12">{title}</h3>
      <div className="text-center col-12">
        <img src={logo} alt="just-a-logo" />
      </div>
      <div className="text-center col-12">
        {url ? (
          <NavButton text="know more" url={url} />
        ) : (
          <Button text="Know more" />
        )}
      </div>
    </div>
  );
}

export default AlgoCard;
