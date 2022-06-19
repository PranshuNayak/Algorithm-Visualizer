import React from "react";
import github from "../images/Vector.svg";
import management from "../images/simple-icons_googletagmanager.svg";
import heart from "../images/ant-design_heart-filled.svg";
import IconWithSubtitle from "../components/IconWithSubtitle";
import Button from "../components/Button";
function Contribute() {
  const items = [
    { text: "developer", icon: `${github}` },
    { text: "donate", icon: `${heart}` },
    { text: "management", icon: `${management}` },
  ];
  const style = {
    backgroundColor: "#DDA7A7",
    borderRadius: "20px",
    padding: "10px",
  };
  return (
    <div className="col-12 vh-100 " id="contribute">
      <div className="row justify-content-center align-items-center">
        <div className="col-7 text-center h3">
            Resources
        </div>
        <p className="col-7">
            Here are some more resou
        </p>
      </div>
    </div>
  );
}

export default Contribute;
