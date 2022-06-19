import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
function NavButton({ text,url,samepage }) {
  const style = {
    backgroundColor: "#D09A9A",
  };
  
  if(samepage)
  return(
    <ScrollLink style={style} spy={true} smooth={true} offset={0} duration={500} to={url} className="btn rounded-pill text-white text-capitalize d-inline-block w-50">{text}</ScrollLink>
  ) 
  return(<Link
    className="btn rounded-pill text-white text-capitalize d-inline-block w-50"
    style={style}
    to={url}
  >
    {text}
  </Link>)
}

export default NavButton;
